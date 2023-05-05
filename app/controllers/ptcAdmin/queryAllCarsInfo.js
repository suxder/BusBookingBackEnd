// 引入Service
const { PTCAdminService } = require('../../service/index');

const queryAllCarsInfo = async ctx => {
  console.log('触发');
  const { adminID } = ctx.request.body;
  const res = await PTCAdminService.queryAllCarsInfo(adminID);
  if (res !== null) {
    ctx.body = {
      success: 1,
      carList: res,
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
  queryAllCarsInfo
};
