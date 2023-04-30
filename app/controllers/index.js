const { login } = require('./user/login');
const { getContent } = require('./post/getContent');
const { logout } = require('./user/logout');

module.exports = {
  login,
  getContent,
  logout
};
