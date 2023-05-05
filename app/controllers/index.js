const { login } = require('./user/login');
const { getContent } = require('./post/getContent');
const { logout } = require('./user/logout');
const { getInfoByID } = require('./user/getInfoByID');
const { createPtcAdmin } = require('./superAdmin/createPtcAdmin');
const { queryAllPtcAdmin } = require('./superAdmin/queryAllPtcAdmin');
const { updatePtcAdmin } = require('./superAdmin/updatePtcAdmin');
const { userSignUp } = require('./user/signUp');

module.exports = {
  login,
  getContent,
  logout,
  getInfoByID,
  createPtcAdmin,
  userSignUp,
  queryAllPtcAdmin,
  updatePtcAdmin
};
