module.exports = schema => {
  return (req, res, next) => {
    // Validate req.body against the given
    // Joi schema (using a closure here):
    const { error } = schema.validate(req.body);
    if (error) {
      if (!req.xhr) {
        return res.render(req.path.slice(1), {
          error: error.message,
          fieldValues: req.body
        });
      }
      return res.send({ error: error.message });
    }
    next();
  };
};