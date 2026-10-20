// Same tables as my Module 8 physical model.
// "IF NOT EXISTS" means my existing blog_db tables and data are left alone.
const mongoose = require("mongoose");

const uri = process.env.DB_URI || "mongodb://127.0.0.1:27017/blogDB";

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
