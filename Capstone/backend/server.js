// STARTS THE SERVER
// Loads my .env settings, connects to MongoDB, then starts listening.
require("dotenv").config();

const app = require("./app");
const connectDB = require("./dbConnect");

const PORT = process.env.PORT || 8081;

connectDB(process.env.DB_URI).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
