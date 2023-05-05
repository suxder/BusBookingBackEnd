const Joi = require('@hapi/joi');

const queryAllRoutesInfo = {
  body: Joi.object({
    adminID: Joi.number().required()
  })
};

module.exports = {
  queryAllRoutesInfo
};
