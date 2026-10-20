// Builds the Express app (routes + error handling).
// Kept separate from server.js so the app can be tested without starting the server.
const express = require("express");

const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const { notFound, errorHandler } = require("./middleware/errorHandler");

const app = express();

app.use(express.json());

// Express 5 leaves req.body undefined when there's no JSON body.
// Defaulting it to {} lets my controllers return clear 400 errors instead of crashing.
app.use((req, res, next) => {
  req.body ??= {};
  next();
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Blog API (MySQL)" });
});

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;