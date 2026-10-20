// Character controller - gets Rick and Morty data from a third-party API.
const { httpError } = require("./helpers");

const BASE_URL = "https://rickandmortyapi.com/api/character";

// Calls the third-party API and turns its problems into my own clear errors.
const fetchFromApi = async (url) => {
  let response;
  try {
    // Give up after 5 seconds so my API never hangs
    response = await fetch(url, { signal: AbortSignal.timeout(5000) });
  } catch {
    throw httpError(502, "Could not reach the Rick and Morty API");
  }
  if (response.status === 404) throw httpError(404, "Nothing found for that request");
  if (!response.ok) throw httpError(502, `Rick and Morty API error: ${response.status}`);
  return response.json();
};

// The third-party API sends a lot of fields. I only send back the ones my app needs.
const simplify = (character) => ({
  id: character.id,
  name: character.name,
  status: character.status,
  species: character.species,
  image: character.image,
});

// GET /api/characters?page=1&name=rick&status=alive  (query parameters)
const getCharacters = async (req, res) => {
  const { page = 1, name, status } = req.query;

  const pageNumber = Number(page);
  if (!Number.isInteger(pageNumber) || pageNumber < 1) {
    throw httpError(400, "page must be a whole number of 1 or more");
  }

  const params = new URLSearchParams({ page: pageNumber });
  if (name) params.set("name", name);
  if (status) params.set("status", status);

  const data = await fetchFromApi(`${BASE_URL}/?${params}`);
  res.json({
    page: pageNumber,
    total_pages: data.info.pages,
    total_results: data.info.count,
    characters: data.results.map(simplify),
  });
};

// GET /api/characters/:id  (route parameter)
const getCharacterById = async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id < 1) {
    throw httpError(400, `Invalid character ID: ${req.params.id}`);
  }

  const character = await fetchFromApi(`${BASE_URL}/${id}`);
  res.json(simplify(character));
};

module.exports = { getCharacters, getCharacterById };