// 引入Service
const { PTCAdminService } = require('../../service/index');

const queryAllRoutesInfo = async ctx => {
  const { adminID } = ctx.request.body;
  const res = await PTCAdminService.queryAllRoutesInfo(adminID);
  if (res !== null) {
    ctx.body = {
      success: 1,
      routeList: res,
      msg: '查询成功'
    };
  } else {
    ctx.body = {
      success: 0,
      msg: '查询失败'
    };
  }
};

module.exports = {
  queryAllRoutesInfo
};
