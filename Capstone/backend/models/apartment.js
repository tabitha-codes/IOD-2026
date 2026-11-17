// APARTMENT MODEL
const mongoose = require("mongoose");

const apartmentSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  neighborhood: { type: String, required: true, trim: true },
  city: { type: String, required: true, trim: true },
  state: { type: String, required: true, trim: true },
  price: { type: Number, required: true, min: 0 },
  beds: { type: Number, required: true, min: 0 },
  baths: { type: Number, required: true, min: 0 },
  description: { type: String, trim: true },
});

module.exports = mongoose.model("Apartment", apartmentSchema);
