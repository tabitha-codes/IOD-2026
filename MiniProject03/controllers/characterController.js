// ===========CHARACTER CONTROLLER===========
// Create, Read, Update and Delete for the characters in my database.
const Character = require("../models/character");
const { httpError, findOrFail } = require("./helpers");

// Only these fields can be sent in Postman. Stops someone changing _id or apiId.
const FIELDS = ["name", "status", "species", "type", "gender", "origin", "location", "image", "episodeCount"];

const pickFields = (body) => {
  const data = {};
  FIELDS.forEach((field) => {
    if (body[field] !== undefined) data[field] = body[field];
  });
  return data;
};

// ===========READ ALL===========
// GET /api/characters
// Filters are optional: /api/characters?status=Alive&species=Human
const getCharacters = async (req, res) => {
  const filter = {};
  if (req.query.status) filter.status = String(req.query.status);
  if (req.query.species) filter.species = String(req.query.species);

  const characters = await Character.find(filter).sort({ apiId: 1 });
  res.json({ count: characters.length, characters });
};

// ===========READ ONE===========
// GET /api/characters/:id
const getCharacterById = async (req, res) => {
  const character = await findOrFail(Character, req.params.id, "Character");
  res.json(character);
};

// ===========CREATE===========
// POST /api/characters
const createCharacter = async (req, res) => {
  const character = await Character.create(pickFields(req.body));
  res.status(201).json(character);
};

// ===========UPDATE===========
// PUT /api/characters/:id
const updateCharacter = async (req, res) => {
  const data = pickFields(req.body);
  if (Object.keys(data).length === 0) {
    throw httpError(400, "Send at least one field to update");
  }

  const character = await findOrFail(Character, req.params.id, "Character");
  Object.assign(character, data);
  await character.save();
  res.json(character);
};

// ===========DELETE===========
// DELETE /api/characters/:id
const deleteCharacter = async (req, res) => {
  const character = await findOrFail(Character, req.params.id, "Character");
  await character.deleteOne();
  res.json({ message: `Deleted ${character.name}` });
};

module.exports = {
  getCharacters,
  getCharacterById,
  createCharacter,
  updateCharacter,
  deleteCharacter,
};
