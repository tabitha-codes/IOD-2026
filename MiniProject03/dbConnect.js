// ===========DATABASE CONNECTION===========
// Uses its own database (rickAndMortyDB) so my other MongoDB databases are not touched.
const mongoose = require("mongoose");

const uri = process.env.DB_URI || "mongodb://localhost:27017/rickAndMortyDB";

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log(`MongoDB connected to ${mongoose.connection.name}`);
  } catch (error) {
    console.log("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
