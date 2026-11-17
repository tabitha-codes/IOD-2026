// ERROR HANDLING
// Notes Ref: my Module 9 blog app

// Any route that doesn't exist
const notFound = (req, res) => {
  res.status(404).json({ error: `Route not found: ${req.method} ${req.originalUrl}` });
};

const errorHandler = (err, req, res, next) => {
  // bad JSON in the request body
  if (err.type === "entity.parse.failed") {
    return res.status(400).json({ error: "Request body is not valid JSON" });
  }

  // errors I made myself, like "Review not found"
  if (err.status) {
    return res.status(err.status).json({ error: err.message });
  }

  // bad ID, like /api/reviews/123
  if (err.name === "CastError") {
    return res.status(400).json({ error: `Invalid ID: ${err.value}` });
  }

  // missing or wrong fields
  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({ error: messages.join(", ") });
  }

  console.log(err);
  res.status(500).json({ error: "Something went wrong on the server" });
};

module.exports = { notFound, errorHandler };
