// SEED DATA
// Run "npm run seed" to fill the database with sample apartments and reviews.
// Warning: this clears out the old apartments and reviews first.
require("dotenv").config();

const mongoose = require("mongoose");
const connectDB = require("./dbConnect");
const { Apartment, Review } = require("./models");

const apartments = [
  {
    name: "Parkview Commons",
    neighborhood: "Logan Square",
    city: "Chicago",
    state: "IL",
    price: 1450,
    beds: 2,
    baths: 1,
    description: "Older building with big windows. Close to the Blue Line.",
  },
  {
    name: "Riverline Lofts",
    neighborhood: "West Loop",
    city: "Chicago",
    state: "IL",
    price: 2100,
    beds: 1,
    baths: 1,
    description: "Loft style units with high ceilings and a rooftop deck.",
  },
  {
    name: "Oakwood Terrace",
    neighborhood: "Andersonville",
    city: "Chicago",
    state: "IL",
    price: 1550,
    beds: 2,
    baths: 2,
    description: "Quiet street, in-unit laundry, small gym on the first floor.",
  },
  {
    name: "Magnolia Row",
    neighborhood: "Bishop Arts",
    city: "Dallas",
    state: "TX",
    price: 1400,
    beds: 1,
    baths: 1,
    description: "Walkable area with lots of places to eat. Covered parking.",
  },
  {
    name: "Cedar Hill Flats",
    neighborhood: "Uptown",
    city: "Dallas",
    state: "TX",
    price: 1650,
    beds: 1,
    baths: 1,
    description: "Newer building with a pool and package lockers.",
  },
  {
    name: "Willow Creek Apartments",
    neighborhood: "Lakewood",
    city: "Dallas",
    state: "TX",
    price: 1300,
    beds: 2,
    baths: 1,
    description: "Garden style apartments near White Rock Lake.",
  },
];

// reviews use the apartment's place in the list above (0 = Parkview Commons)
const reviews = [
  {
    apt: 0,
    name: "Jasmine R.",
    review_type: "resident",
    rating: 4,
    pros: "Lots of natural light and the train is a 5 minute walk.",
    cons: "Radiators get really loud in the winter.",
    agent_name: "Marcus",
    agent_notes: "Answered my emails fast and was honest about the heating.",
  },
  {
    apt: 0,
    name: "Devon P.",
    review_type: "tour",
    rating: 3,
    pros: "Bedrooms are a good size.",
    cons: "Kitchen is pretty dated and there's no dishwasher.",
    agent_name: "Marcus",
    agent_notes: "Nice but kind of rushed the tour.",
  },
  {
    apt: 1,
    name: "Alyssa M.",
    review_type: "tour",
    rating: 4,
    pros: "Rooftop is beautiful and the unit felt huge with the high ceilings.",
    cons: "Expensive and parking is another $200 a month.",
    agent_name: "Tina",
    agent_notes: "Very helpful. She showed me two different floor plans.",
  },
  {
    apt: 2,
    name: "Chris L.",
    review_type: "resident",
    rating: 5,
    pros: "Quiet, clean, and maintenance fixes things in a day or two.",
    cons: "Gym is small. Only two treadmills.",
    agent_name: "",
    agent_notes: "",
  },
  {
    apt: 3,
    name: "Brianna T.",
    review_type: "resident",
    rating: 4,
    pros: "I can walk to coffee, dinner, everything.",
    cons: "Weekend nights can be noisy.",
    agent_name: "Luis",
    agent_notes: "Luis was great. He waived the app fee for me.",
  },
  {
    apt: 4,
    name: "Kevin S.",
    review_type: "tour",
    rating: 2,
    pros: "Pool area is nice.",
    cons: "The unit they showed me had a weird smell and the walls are thin.",
    agent_name: "Ashley",
    agent_notes: "She couldn't answer most of my questions about fees.",
  },
  {
    apt: 5,
    name: "Monique W.",
    review_type: "resident",
    rating: 4,
    pros: "Good price for a 2 bedroom and the lake is right there.",
    cons: "No in-unit laundry. The laundry room is shared.",
    agent_name: "Dana",
    agent_notes: "Made move-in day easy.",
  },
];

const seed = async () => {
  await connectDB(process.env.DB_URI);

  await Review.deleteMany({});
  await Apartment.deleteMany({});

  const savedApartments = await Apartment.insertMany(apartments);

  const reviewsWithIds = reviews.map(({ apt, ...review }) => ({
    ...review,
    apartment_id: savedApartments[apt]._id,
  }));
  await Review.insertMany(reviewsWithIds);

  console.log(`Added ${savedApartments.length} apartments and ${reviewsWithIds.length} reviews`);
  await mongoose.disconnect();
};

seed();
