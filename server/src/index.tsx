// const Koa = require('koa')
import Koa from 'koa';
const app = new Koa();

var main = ctx => {
  ctx.response.body = 'hello world222';
};

app.use(main);
app.listen(3000);
