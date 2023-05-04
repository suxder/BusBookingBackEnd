const { login, logout, getInfoByID, createPtcAdmin, userSignUp, queryAllPtcAdmin } = require('../controllers');
const { scmUser, scmSuperAdmin } = require('../schema/index');

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
    // 用户注册
    method: 'post',
    path: '/user/signup',
    valid: scmUser.userSignUp,
    controller: userSignUp
  },
  {
    // 根据用户ID查询用户信息
    method: 'post',
    path: '/user/getInfoByID',
    valid: scmUser.getInfoByID,
    controller: getInfoByID
  },
  {
    // 超级管理员添加Ptc管理员
    method: 'post',
    path: '/superAdmin/createPtcAdmin',
    valid: scmSuperAdmin.createPtcAdmin,
    controller: createPtcAdmin
  },
  {
    // 超级管理员查询所有Ptc管理员信息
    method: 'get',
    path: '/superAdmin/queryAllPtcAdmin',
    controller: queryAllPtcAdmin
  }
];

module.exports = routes;
