// APARTMENT CONTROLLER
const { Apartment, Review } = require("../models");
const { findOrFail } = require("./helpers");

// GET /api/apartments
// every apartment with how many reviews it has
const getApartments = async (req, res) => {
  const apartments = await Apartment.find().sort({ name: 1 }).lean();

  const result = await Promise.all(
    apartments.map(async (apartment) => ({
      ...apartment,
      review_count: await Review.countDocuments({ apartment_id: apartment._id }),
    }))
  );

  res.json(result);
};

// GET /api/apartments/:id
// one apartment plus all of its reviews, newest first
const getApartmentById = async (req, res) => {
  const apartment = await findOrFail(Apartment, req.params.id, "Apartment");
  const reviews = await Review.find({ apartment_id: apartment._id }).sort({ created_at: -1 });

  res.json({ ...apartment.toObject(), reviews });
};

module.exports = { getApartments, getApartmentById };
