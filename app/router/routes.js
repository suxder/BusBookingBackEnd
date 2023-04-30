const { login, logout } = require('../controllers');
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
  }
];

module.exports = routes;
