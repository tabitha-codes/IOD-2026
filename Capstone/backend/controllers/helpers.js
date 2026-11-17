// SMALL HELPERS
// Notes Ref: my Module 9 blog app

// makes an error with a status code attached
const httpError = (status, message) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

// finds one document by ID or throws a 404
const findOrFail = async (Model, id, name) => {
  if (!id) throw httpError(400, `${name} ID is required`);
  const doc = await Model.findById(id);
  if (!doc) throw httpError(404, `${name} not found`);
  return doc;
};

module.exports = { httpError, findOrFail };
