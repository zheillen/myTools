import Router from 'koa-router';
import fileController from '../controller/file';

const router = new Router();

/**
 * 获取文件目录
 */
router.get('/display', fileController.display);

export default router;
