// 引入services
const { UserService } = require('../../service');

const getInfoByID = async ctx => {
  const { id, type } = ctx.request.body;
  const res = await UserService.getInfoByID(id, type);
  if (res !== null) {
    console.log(res);
    ctx.body = {
      userInfo: res,
      success: '1'
    };
  } else {
    ctx.body = {
      success: 0,
      msg: '该用户不存在'
    };
  }
};

module.exports = {
  getInfoByID
};
