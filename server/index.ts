import Koa from 'koa';
import cors from 'koa-cors';
import router from './router';

const app = new Koa();
// 为了能跨域，可以配置其他参数
app.use(cors());
// 设置路由
app.use(router.routes());

app.listen(3000);
