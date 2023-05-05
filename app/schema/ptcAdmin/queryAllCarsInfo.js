const Joi = require('@hapi/joi');

const queryAllCarsInfo = {
  body: Joi.object({
    adminID: Joi.number().required()
  })
};

module.exports = {
  queryAllCarsInfo
};
