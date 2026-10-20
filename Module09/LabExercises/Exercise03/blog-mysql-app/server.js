// Starting point: loads settings, connects to MySQL, then starts the server.
require("dotenv").config();

const app = require("./app");
const { connectDB } = require("./dbConnect");

const PORT = process.env.PORT || 8080;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
