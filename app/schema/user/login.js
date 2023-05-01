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

const userSignUp = {
  body: Joi.object({
    telephone: Joi.string().required(),
    userPwd: Joi.string().required(),
    userName: Joi.string().required(),
    userGender: Joi.number().required(),
    userIDCard: Joi.string().required(),
    userEmail: Joi.string().required(),
    userAddress: Joi.string().required()
  })
};

module.exports = {
  login,
  getInfoByID,
  userSignUp
};
