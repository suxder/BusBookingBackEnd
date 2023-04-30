// 引入services
const { UserService } = require('../../service');
// 引入jwt
const jwt = require('jsonwebtoken');

const login = async ctx => {
  const { tel, pwd } = ctx.request.body;
  // 使用service方法，得到查询结果
  const res = await UserService.findOne(tel, pwd);
  if (res.length > 0) {
    const hashedPassword = res[0].pwd;
    const salt = res[0].salt;
    const hashPassword = ctx.utils.encryptPassword(pwd, salt);
    if (hashedPassword === hashPassword) {
      // 用户token
      const userToken = {
        name: tel,
        id: res[0].id
      };
      // 签发token
      const token = jwt.sign(userToken, ctx.config.tokenSecret, { expiresIn: '2h' });
      // 成功返回
      ctx.body = {
        id: res[0].id,
        role: res[0].userRole,
        token: token,
        success: 1,
        msg: '登录成功'
      };
    } else {
      // 失败返回
      ctx.body = {
        success: 0,
        msg: '用户名或密码错误'
      };
    }
  } else {
    // 失败返回
    ctx.body = {
      success: 0,
      msg: '用户名或密码错误'
    };
  }
};

module.exports = {
  login
};
