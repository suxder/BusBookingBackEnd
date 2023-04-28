const { login, getContent } = require('../controllers');
const { scmUser, scmPost } = require('../schema/index');

const routes = [
  {
    // 根据文章ID获取文章内容
    method: 'post',
    path: '/sea',
    valid: scmPost.getContent,
    controller: getContent
  },
  {
    //  用户登陆
    method: 'post',
    path: '/user/login',
    valid: scmUser.login,
    controller: login
  }
];

module.exports = routes;
