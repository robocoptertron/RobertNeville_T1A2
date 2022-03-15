const Joi = require('joi');

const contact = Joi.object({
  // 'Name' field:
  name: Joi.string().required().error(errors => {
    errors.forEach(error => {
      switch (error.code) {
        case 'string.empty':
          error.message = '\'Name\' is a required field';
          break;
        case 'string.base':
          error.message = '\'Name\' must be a string';
          break;
        default:
          break;
      }
    });
    return errors;
  }),
  // Email field:
  email: Joi.string().email().required().error(errors => {
    errors.forEach(error => {
      switch (error.code) {
        case 'string.empty':
          error.message = '\'Email\' is a required field';
          break;
        case 'string.base':
          error.message = '\'Email\' must be a string';
          break;
        case 'string.email':
          error.message = 'Please enter a valid email address';
          break;
        default:
          break;
      }
    });
    return errors;
  }),
  // Message field:
  message: Joi.string().required().error(errors => {
    errors.forEach(error => {
      switch (error.code) {
        case 'string.empty':
          error.message = '\'Message\' is a required field';
          break;
        case 'string.base':
          error.message = '\'Message\' must be a string';
          break;
        default:
          break;
      }
    });
    return errors;
  })
});

module.exports = { contact };