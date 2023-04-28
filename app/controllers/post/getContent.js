// 引入services
const { PostService } = require('../../service');

const getContent = async ctx => {
  console.log('开始执行》》》》');
  const { id } = ctx.request.query;
  console.log('id==' + id);
  // 利用service得到文章具体内容
  const res = await PostService.findContentByID(id);
  if (res.length > 0) {
    const data = {
      title: res[0].title,
      metaTitle: res[0].metaTitle,
      summary: res[0].summary,
      updatedAt: res[0].updatedAt,
      content: res[0].content
    };
    ctx.body = {
      success: 1,
      data: data,
      message: '获取文章信息成功'
    };
  } else {
    ctx.body = {
      success: 0,
      msg: '该文章不存在'
    };
  }
};

module.exports = {
  getContent
};
