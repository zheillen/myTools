// const Koa = require('koa')
import Koa from 'koa';
// import router from './router';

const app = new Koa();

// app.use(router.routes());

const main = ctx => {
  if (ctx.request.accepts('xml')) {
    ctx.response.type = 'xml';
    ctx.response.body = '<data>Hello World</data>';
  } else if (ctx.request.accepts('json')) {
    ctx.response.type = 'json';
    ctx.response.body = { data: 'Hello World11' };
  } else if (ctx.request.accepts('html')) {
    ctx.response.type = 'html';
    ctx.response.body = '<p>Hello World22</p>';
  } else {
    ctx.response.type = 'text';
    ctx.response.body = 'Hello World33';
  }
};
app.use(main);

app.listen(3000);
