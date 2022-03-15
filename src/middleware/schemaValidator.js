// Returns a closure that can be used
// to validate req.body against an 
// arbitrary Joi schema. Used in
// case additional forms are added
// to the site
module.exports = schema => {
  return (req, res, next) => {
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