import Router from 'koa-router';
import file from './file';

const router = new Router();

router.use('/api/file', file.routes());

export default router;
