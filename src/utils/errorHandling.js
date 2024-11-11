function handleError(err, h) {
  const { statusCode, message } = err;
  return h.response({ statusCode, error: message }).code(statusCode || 500);
}

module.exports = { handleError };
