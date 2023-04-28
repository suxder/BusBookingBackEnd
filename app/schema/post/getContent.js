const Joi = require('@hapi/joi');

const getContent = {
  query: Joi.object({
    id: Joi.string().required()
  })
};

module.exports = {
  getContent
};
