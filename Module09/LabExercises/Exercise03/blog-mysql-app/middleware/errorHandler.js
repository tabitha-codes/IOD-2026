// Sends a 404 for any route that doesn't exist.
const notFound = (req, res) => {
  res.status(404).json({ error: `Route not found: ${req.method} ${req.originalUrl}` });
};

// Catches errors from the controllers and turns them into clear JSON responses.
const errorHandler = (err, req, res, next) => {
  // Badly formed JSON in the request body
  if (err.type === "entity.parse.failed") {
    return res.status(400).json({ error: "Request body is not valid JSON" });
  }

  // Errors we created ourselves with a status (e.g. "Post not found" -> 404)
  if (err.status) {
    return res.status(err.status).json({ error: err.message });
  }

  // MySQL Error 1062 - duplicate value on a UNIQUE column (username, email, or the same like twice)
  if (err.code === "ER_DUP_ENTRY") {
    return res.status(409).json({ error: "That value already exists" });
  }

  // MySQL Error 1406 - text too long for the column (e.g. title over 100 characters)
  if (err.code === "ER_DATA_TOO_LONG") {
    return res.status(400).json({ error: "A value is too long" });
  }

  // MySQL Error 1452 - foreign key points at a row that doesn't exist
  if (err.code === "ER_NO_REFERENCED_ROW_2") {
    return res.status(404).json({ error: "Linked user or post does not exist" });
  }

  console.log(err);
  res.status(500).json({ error: "Something went wrong on the server" });
};

module.exports = { notFound, errorHandler };
