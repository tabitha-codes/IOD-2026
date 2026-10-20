// Small shared helpers so the controllers don't repeat the same checks.

// Creates an error with an HTTP status code attached.
const httpError = (status, message) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

// MySQL IDs are whole numbers (1, 2, 3...). Turns "5" into 5, or throws a 400.
const toId = (value, name) => {
  if (value === undefined || value === null || value === "") {
    throw httpError(400, `${name} ID is required`);
  }
  const id = Number(value);
  if (!Number.isInteger(id) || id < 1) throw httpError(400, `Invalid ${name} ID: ${value}`);
  return id;
};

// Finds a row by ID or throws a clear 400/404 error.
// Example: const post = await findOrFail(Post, req.params.id, "Post");
const findOrFail = async (Model, value, name) => {
  const row = await Model.findById(toId(value, name));
  if (!row) throw httpError(404, `${name} not found`);
  return row;
};

// Checks that each listed field was sent and isn't empty.
const requireFields = (body, fields) => {
  const missing = fields.filter((f) => typeof body[f] !== "string" || body[f].trim() === "");
  if (missing.length) throw httpError(400, `Missing required field(s): ${missing.join(", ")}`);
};

module.exports = { httpError, toId, findOrFail, requireFields };
