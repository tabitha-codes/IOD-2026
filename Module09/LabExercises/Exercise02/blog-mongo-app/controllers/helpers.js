// Small shared helpers so the controllers don't repeat the same checks.

// Creates an error with an HTTP status code attached.
const httpError = (status, message) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

// Finds a document by ID or throws a clear 400/404 error.
// Example: const post = await findOrFail(Post, req.params.id, "Post");
const findOrFail = async (Model, id, name) => {
  if (!id) throw httpError(400, `${name} ID is required`);
  const doc = await Model.findById(id);
  if (!doc) throw httpError(404, `${name} not found`);
  return doc;
};

module.exports = { httpError, findOrFail };
