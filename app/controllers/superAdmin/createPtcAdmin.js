// 引入service
const { SuperAdminService } = require('../../service/index');

const createPtcAdmin = async ctx => {
  const { adminName, telephone, adminPwd, adminPtc } = ctx.request.body;
  const res = await SuperAdminService.createPtcAdmin(adminName, telephone, adminPwd, adminPtc);
  if (res !== null) {
    ctx.body = {
      success: 1,
      msg: '添加客运中心管理员成功'
    };
  } else {
    ctx.body = {
      success: 0,
      msg: '添加客运中心管理员失败'
    };
  }
};

module.exports = {
  createPtcAdmin
};
