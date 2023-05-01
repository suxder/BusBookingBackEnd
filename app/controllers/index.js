const { login } = require('./user/login');
const { getContent } = require('./post/getContent');
const { logout } = require('./user/logout');
const { getInfoByID } = require('./user/getInfoByID');
const { createPtcAdmin } = require('./superAdmin/createPtcAdmin');

module.exports = {
  login,
  getContent,
  logout,
  getInfoByID,
  createPtcAdmin
};
