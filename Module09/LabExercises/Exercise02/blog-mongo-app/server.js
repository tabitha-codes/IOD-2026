// Starting point: loads settings, connects to MongoDB, then starts the server.
require("dotenv").config();

const app = require("./app");
const connectDB = require("./dbConnect");

// const PORT = process.env.PORT || 8080;
const PORT = process.env.PORT || 8081;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
