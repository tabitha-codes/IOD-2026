// ===========HELPERS===========
// Small helpers so my controller doesn't repeat the same checks. From my Module 9 blog app.

// Makes an error with a status code
const httpError = (status, message) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

// Finds a document by ID or throws a 404
const findOrFail = async (Model, id, name) => {
  const doc = await Model.findById(id);
  if (!doc) throw httpError(404, `${name} not found`);
  return doc;
};

module.exports = { httpError, findOrFail };
