// 引入service
const { SuperAdminService } = require('../../service/index');

const queryAllPtcAdmin = async ctx => {
  const res = await SuperAdminService.queryAllPtcAdmin();
  console.log(res);
  if (res !== null) {
    ctx.body = {
      success: 1,
      ptcAdminList: res,
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
  queryAllPtcAdmin
};
