// ===========ERROR HANDLING===========
// Same idea as my Module 9 blog app.

// Sends a 404 for any route that doesn't exist
const notFound = (req, res) => {
  res.status(404).json({ error: `Route not found: ${req.method} ${req.originalUrl}` });
};

// Turns errors into clear JSON messages
const errorHandler = (err, req, res, next) => {
  // Bad JSON in the request body
  if (err.type === "entity.parse.failed") {
    return res.status(400).json({ error: "Request body is not valid JSON" });
  }

  // Errors I made myself with a status, like "Character not found"
  if (err.status) {
    return res.status(err.status).json({ error: err.message });
  }

  // Bad ID, like /api/characters/123
  if (err.name === "CastError") {
    return res.status(400).json({ error: `Invalid ID: ${err.value}` });
  }

  // Missing name, wrong status, etc.
  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({ error: messages.join(", ") });
  }

  console.log(err);
  res.status(500).json({ error: "Something went wrong on the server" });
};

module.exports = { notFound, errorHandler };
