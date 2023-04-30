const logout = async ctx => {
  ctx.body = {
    success: 1,
    msg: '退出登录成功'
  };
};

module.exports = {
  logout
};
