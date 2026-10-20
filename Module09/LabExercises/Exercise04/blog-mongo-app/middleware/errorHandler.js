// Sends a 404 for any route that doesn't exist.
const notFound = (req, res) => {
  res.status(404).json({ error: `Route not found: ${req.method} ${req.originalUrl}` });
};

// Catches errors from the controllers and turns them into clear JSON responses.
const errorHandler = (err, req, res, next) => {
  // Errors I created ourselves with a status (e.g. "Post not found" -> 404)
  if (err.status) {
    return res.status(err.status).json({ error: err.message });
  }

  // Badly formed JSON in the request body
  if (err.type === "entity.parse.failed") {
    return res.status(400).json({ error: "Request body is not valid JSON" });
  }

  // Bad ID, e.g. /api/posts/123
  if (err.name === "CastError") {
    return res.status(400).json({ error: `Invalid ID: ${err.value}` });
  }

  // Missing required field, wrong email format, etc.
  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({ error: messages.join(", ") });
  }

  // Duplicate value on a unique field (username, email, or the same like twice)
  if (err.code === 11000) {
    const fields = Object.keys(err.keyValue || {}).join(", ");
    return res.status(409).json({ error: `Duplicate value for: ${fields}` });
  }

  console.log(err);
  res.status(500).json({ error: "Something went wrong on the server" });
};

module.exports = { notFound, errorHandler };
