module.exports = schema => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.send({ error: error.message });
    }
    next();
  };
};