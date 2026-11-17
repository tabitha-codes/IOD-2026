// ===========CHARACTER MODEL===========
// Matches the character data from the Rick and Morty API.
// I kept the fields I need. origin and location are objects in the API, I only save their names.
// API docs: https://rickandmortyapi.com/documentation/#character-schema
const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema(
  {
    // The id from the API. Characters I make myself in Postman won't have one.
    apiId: { type: Number },
    name: { type: String, required: true, trim: true },
    status: { type: String, enum: ["Alive", "Dead", "unknown"], default: "unknown" },
    species: { type: String, trim: true },
    type: { type: String, trim: true },
    gender: { type: String, enum: ["Female", "Male", "Genderless", "unknown"], default: "unknown" },
    origin: { type: String, trim: true },
    location: { type: String, trim: true },
    image: { type: String, trim: true },
    episodeCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Character", characterSchema);
