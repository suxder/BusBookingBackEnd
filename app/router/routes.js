const { login, logout, getInfoByID } = require('../controllers');
const { scmUser } = require('../schema/index');

const routes = [
  {
    //  用户登陆
    method: 'post',
    path: '/user/login',
    valid: scmUser.login,
    controller: login
  },
  {
    //  用户登出
    method: 'get',
    path: '/user/logout',
    controller: logout
  },
  {
    // 根据用户ID查询用户信息
    method: 'post',
    path: '/user/getInfoByID',
    valid: scmUser.getInfoByID,
    controller: getInfoByID
  }
];

module.exports = routes;
