const Joi = require('@hapi/joi');

// adminName, telephone, adminPwd, adminPtc
const updatePtcAdmin = {
  body: Joi.object({
    id: Joi.number().required(),
    telephone: Joi.string().required(),
    adminName: Joi.string().required(),
    adminPtc: Joi.string().required()
  })
};

module.exports = {
  updatePtcAdmin
};
