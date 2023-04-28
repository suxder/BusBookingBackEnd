const Joi = require('@hapi/joi');

const login = {
  body: Joi.object({
    email: Joi.string().required(),
    pwd: Joi.string().required()
  })
};

module.exports = {
  login
};
