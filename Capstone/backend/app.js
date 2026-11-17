// SETS UP EXPRESS
// I keep this separate from server.js so my tests can use the app
// without starting the real server. (Same setup as my Module 9 blog app.)
const express = require("express");

const apartmentRoutes = require("./routes/apartmentRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const { notFound, errorHandler } = require("./middleware/errorHandler");

const app = express();

app.use(express.json());

// Express 5 leaves req.body undefined if nothing is sent
app.use((req, res, next) => {
  req.body ??= {};
  next();
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Lease Lens API" });
});

app.use("/api/apartments", apartmentRoutes);
app.use("/api/reviews", reviewRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
