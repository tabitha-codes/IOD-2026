// ===========EXPRESS APP===========
const express = require("express");
const characterRoutes = require("./routes/characterRoutes");
const { notFound, errorHandler } = require("./middleware/errorHandler");

const app = express();

app.use(express.json());

// Express 5 leaves req.body undefined when no JSON is sent, so I default it to {}
app.use((req, res, next) => {
  req.body ??= {};
  next();
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my Rick and Morty API" });
});

app.use("/api/characters", characterRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
