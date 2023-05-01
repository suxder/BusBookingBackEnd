const Joi = require('@hapi/joi');

// adminName, telephone, adminPwd, adminPtc
const createPtcAdmin = {
  body: Joi.object({
    adminName: Joi.string().required(),
    telephone: Joi.string().required(),
    adminPwd: Joi.string().required(),
    adminPtc: Joi.string().required()
  })
};

module.exports = {
  createPtcAdmin
};
