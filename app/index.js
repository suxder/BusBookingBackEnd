const Koa = require('koa');
const compose = require('koa-compose');

const MD = require('./middlewares/');
const config = require('./config');
const utils = require('./common/utils');

const app = new Koa();

const port = '3001';
// const host = '0.0.0.0';

app.context.config = config;
app.context.utils = utils;
app.use(compose(MD));

app.on('error', (err, ctx) => {
  if (ctx) {
    ctx.body = {
      code: 9999,
      message: `程序运行时报错：${err.message}`
    };
  }
});

app.listen(port, () => {
  console.log(`API server listening on ${port}`);
});
