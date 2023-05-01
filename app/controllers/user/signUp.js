const { UserService } = require('../../service/index');

const userSignUp = async ctx => {
  const { telephone, userPwd, userName, userGender, userIDCard, userEmail, userAddress } = ctx.request.body;
  const res = await UserService.userSignUp(telephone, userPwd, userName, userGender, userIDCard, userEmail, userAddress);
  if (res !== null) {
    ctx.body = {
      success: 1,
      msg: '注册成功'
    };
  } else {
    ctx.body = {
      success: 0,
      msg: '注册失败'
    };
  }
};

module.exports = {
  userSignUp
};
