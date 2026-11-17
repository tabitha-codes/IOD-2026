// ===========SEED THE DATABASE===========
// Run with: npm run seed
// Gets every character from the Rick and Morty API and saves them in my rickAndMortyDB database.
// It only clears the characters collection in rickAndMortyDB. Nothing else is touched.
require("dotenv").config();

const mongoose = require("mongoose");
const connectDB = require("./dbConnect");
const Character = require("./models/character");

const API_URL = "https://rickandmortyapi.com/api/character";

// ===========SAFETY CHECK===========
// Stops if .env points to a different database, so I can't wipe my other projects by mistake.
const checkDatabaseName = () => {
  if (mongoose.connection.name !== "rickAndMortyDB") {
    console.log(`Stopped: connected to "${mongoose.connection.name}", not "rickAndMortyDB".`);
    process.exit(1);
  }
};

// ===========WAIT HELPER===========
// Pauses for a few milliseconds. The API sends error 429 if I ask too fast.
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// ===========GET ONE PAGE FROM THE API===========
// If I get a 429, I wait and try the same page again (up to 5 tries in total).
const fetchPage = async (url) => {
  for (let tries = 1; tries <= 5; tries++) {
    // Give up after 10 seconds so it doesn't hang
    const response = await fetch(url, { signal: AbortSignal.timeout(10000) });

    if (response.status === 429 && tries < 5) {
      console.log(`Too many requests, waiting before try ${tries + 1}...`);
      await wait(tries * 2000);
      continue;
    }

    if (!response.ok) throw new Error(`Rick and Morty API error: ${response.status}`);
    return response.json();
  }
};

// ===========API DATA -> MY MODEL===========
const toCharacter = (c) => ({
  apiId: c.id,
  name: c.name,
  status: c.status,
  species: c.species,
  type: c.type,
  gender: c.gender,
  origin: c.origin.name,
  location: c.location.name,
  image: c.image,
  episodeCount: c.episode.length,
});

const seed = async () => {
  await connectDB();
  checkDatabaseName();

  try {
    // The API sends 20 characters per page. info.next is the next page, or null on the last one.
    const characters = [];
    let url = API_URL;
    while (url) {
      const data = await fetchPage(url);
      characters.push(...data.results.map(toCharacter));
      console.log(`Got ${characters.length} of ${data.info.count} characters`);
      url = data.info.next;
      // Short pause between pages so I don't hit the limit
      await wait(500);
    }

    // I clear the old characters AFTER the fetch works, so a failed fetch doesn't leave it empty
    await Character.deleteMany({});
    await Character.insertMany(characters);
    console.log(`Saved ${characters.length} characters to rickAndMortyDB`);
  } catch (error) {
    console.log("Seed failed:", error.message);
    // fetch hides the real network problem in error.cause (like no internet or a blocked site)
    if (error.cause) console.log("Reason:", error.cause.message || error.cause);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
};

seed();
