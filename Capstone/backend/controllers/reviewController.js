// REVIEW CONTROLLER
// This is my CRUD: create, read, update and delete reviews.
const { Apartment, Review } = require("../models");
const { httpError, findOrFail } = require("./helpers");

// only these fields can be added or changed
const getReviewFields = (body) => {
  const { name, review_type, rating, pros, cons, agent_name, agent_notes, photo_url } = body;
  return { name, review_type, rating, pros, cons, agent_name, agent_notes, photo_url };
};

// POST /api/reviews
const createReview = async (req, res) => {
  await findOrFail(Apartment, req.body.apartment_id, "Apartment");

  const review = await Review.create({
    apartment_id: req.body.apartment_id,
    ...getReviewFields(req.body),
  });

  res.status(201).json(review);
};

// GET /api/reviews
// add ?apartment_id=... to only get one apartment's reviews
const getReviews = async (req, res) => {
  const filter = {};
  if (req.query.apartment_id) filter.apartment_id = req.query.apartment_id;

  const reviews = await Review.find(filter).sort({ created_at: -1 });
  res.json(reviews);
};

// GET /api/reviews/:id
const getReviewById = async (req, res) => {
  const review = await findOrFail(Review, req.params.id, "Review");
  res.json(review);
};

// PUT /api/reviews/:id
const updateReview = async (req, res) => {
  const review = await findOrFail(Review, req.params.id, "Review");

  // only change the fields that were sent
  const fields = getReviewFields(req.body);
  for (const key in fields) {
    if (fields[key] !== undefined) review[key] = fields[key];
  }

  await review.save();
  res.json(review);
};

// DELETE /api/reviews/:id
const deleteReview = async (req, res) => {
  const review = await Review.findByIdAndDelete(req.params.id);
  if (!review) throw httpError(404, "Review not found");

  res.json({ message: "Review deleted" });
};

module.exports = { createReview, getReviews, getReviewById, updateReview, deleteReview };
