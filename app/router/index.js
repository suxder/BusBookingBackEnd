const KoaRouter = require('koa-router');
const router = new KoaRouter();

const routeList = require('./routes');
const paramValidator = require('../middlewares/paramValidator');

router.get('/', ctx => {
  ctx.body = 'server ok';
});

routeList.forEach(item => {
  console.log(item);
  const { method, path, controller, valid } = item;
  router[method](path, paramValidator(valid), controller);
});

module.exports = router;
