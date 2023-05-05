// 引入service
const { SuperAdminService } = require('../../service/index');

const updatePtcAdmin = async ctx => {
  const { id, telephone, adminPtc, adminName } = ctx.request.body;
  // 组织传入信息
  const res = await SuperAdminService.updatePtcAdminByID(id, telephone, adminPtc, adminName);
  if (res !== null) {
    ctx.body = {
      success: 1,
      msg: '信息更新成功'
    };
  } else {
    ctx.body = {
      success: 0,
      msg: '信息更新失败'
    };
  }
};

module.exports = {
  updatePtcAdmin
};
