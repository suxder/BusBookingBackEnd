const Joi = require('@hapi/joi');

const login = {
  body: Joi.object({
    tel: Joi.string().required(),
    pwd: Joi.string().required()
  })
};

const getInfoByID = {
  body: Joi.object({
    id: Joi.number().required(),
    type: Joi.number().required()
  })
};

module.exports = {
  login,
  getInfoByID
};
