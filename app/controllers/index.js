const { login } = require('./user/login');
const { getContent } = require('./post/getContent');
const { logout } = require('./user/logout');
const { getInfoByID } = require('./user/getInfoByID');
const { userSignUp } = require('./user/signUp');
const { createPtcAdmin } = require('./superAdmin/createPtcAdmin');
const { queryAllPtcAdmin } = require('./superAdmin/queryAllPtcAdmin');
const { updatePtcAdmin } = require('./superAdmin/updatePtcAdmin');
const { queryAllCarsInfo } = require('./ptcAdmin/queryAllCarsInfo');
const { queryAllRoutesInfo } = require('./ptcAdmin/queryAllRoutesInfo');

module.exports = {
  login,
  getContent,
  logout,
  getInfoByID,
  createPtcAdmin,
  userSignUp,
  queryAllPtcAdmin,
  updatePtcAdmin,
  queryAllCarsInfo,
  queryAllRoutesInfo
};
