// UNIT TESTS FOR MY API
// Uses a separate test database so my real data is safe.
// MongoDB has to be running before "npm test".
require("dotenv").config();

const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");
const { Apartment, Review } = require("../models");

const TEST_DB = process.env.TEST_DB_URI || "mongodb://127.0.0.1:27017/leaseLensTestDB";

let apartment;
let reviewId;

const newReview = {
  name: "Test Renter",
  review_type: "tour",
  rating: 4,
  pros: "Big closets",
  cons: "Far from the train",
  agent_name: "Sam",
  agent_notes: "Friendly",
};

beforeAll(async () => {
  // await mongoose.connect(TEST_DB);
  await mongoose.connect(TEST_DB, { runtimeAdapters: { os: require("os") } });
  await Review.deleteMany({});
  await Apartment.deleteMany({});

  apartment = await Apartment.create({
    name: "Test Apartments",
    neighborhood: "Downtown",
    city: "Chicago",
    state: "IL",
    price: 1500,
    beds: 1,
    baths: 1,
  });
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.disconnect();
});

// ===========APARTMENTS===========
describe("Apartment Routes", () => {
  test("GET /api/apartments => list of apartments", async () => {
    const response = await request(app).get("/api/apartments").expect(200);

    expect(response.body.length).toBe(1);
    expect(response.body[0].name).toBe("Test Apartments");
    expect(response.body[0].review_count).toBe(0);
  });

  test("GET /api/apartments/:id => one apartment with its reviews", async () => {
    const response = await request(app).get(`/api/apartments/${apartment._id}`).expect(200);

    expect(response.body.name).toBe("Test Apartments");
    expect(response.body.reviews).toEqual([]);
  });

  test("GET /api/apartments/:id with a bad ID => 400", async () => {
    await request(app).get("/api/apartments/123").expect(400);
  });

  test("GET /api/apartments/:id that doesn't exist => 404", async () => {
    const fakeId = new mongoose.Types.ObjectId();
    await request(app).get(`/api/apartments/${fakeId}`).expect(404);
  });
});

// ===========REVIEWS (CRUD)===========
describe("Review Routes", () => {
  // CREATE
  test("POST /api/reviews => adds a review", async () => {
    const response = await request(app)
      .post("/api/reviews")
      .send({ ...newReview, apartment_id: apartment._id })
      .expect(201);

    expect(response.body.name).toBe("Test Renter");
    expect(response.body.rating).toBe(4);
    reviewId = response.body._id;
  });

  test("POST /api/reviews without a name => 400", async () => {
    const response = await request(app)
      .post("/api/reviews")
      .send({ ...newReview, name: "", apartment_id: apartment._id })
      .expect(400);

    expect(response.body.error).toMatch(/Name is required/);
  });

  test("POST /api/reviews with a rating of 9 => 400", async () => {
    await request(app)
      .post("/api/reviews")
      .send({ ...newReview, rating: 9, apartment_id: apartment._id })
      .expect(400);
  });

  test("POST /api/reviews for an apartment that doesn't exist => 404", async () => {
    const fakeId = new mongoose.Types.ObjectId();
    await request(app)
      .post("/api/reviews")
      .send({ ...newReview, apartment_id: fakeId })
      .expect(404);
  });

  // READ
  test("GET /api/reviews?apartment_id= => reviews for one apartment", async () => {
    const response = await request(app)
      .get(`/api/reviews?apartment_id=${apartment._id}`)
      .expect(200);

    expect(response.body.length).toBe(1);
  });

  test("GET /api/reviews/:id => one review", async () => {
    const response = await request(app).get(`/api/reviews/${reviewId}`).expect(200);
    expect(response.body.pros).toBe("Big closets");
  });

  test("GET /api/apartments => review count goes up", async () => {
    const response = await request(app).get("/api/apartments").expect(200);
    expect(response.body[0].review_count).toBe(1);
  });

  // UPDATE
  test("PUT /api/reviews/:id => changes a review", async () => {
    const response = await request(app)
      .put(`/api/reviews/${reviewId}`)
      .send({ rating: 5, cons: "None really" })
      .expect(200);

    expect(response.body.rating).toBe(5);
    expect(response.body.cons).toBe("None really");
    expect(response.body.name).toBe("Test Renter");
  });

  test("PUT /api/reviews/:id with a rating of 0 => 400", async () => {
    await request(app).put(`/api/reviews/${reviewId}`).send({ rating: 0 }).expect(400);
  });

  // DELETE
  test("DELETE /api/reviews/:id => removes a review", async () => {
    await request(app).delete(`/api/reviews/${reviewId}`).expect(200);
    await request(app).get(`/api/reviews/${reviewId}`).expect(404);
  });

  test("DELETE /api/reviews/:id that's already gone => 404", async () => {
    await request(app).delete(`/api/reviews/${reviewId}`).expect(404);
  });
});

// ===========OTHER===========
test("Unknown route => 404", async () => {
  await request(app).get("/api/nope").expect(404);
});
