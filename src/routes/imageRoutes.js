import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';

import imageController from '../controllers/ImageController';

const router = new Router();

router.post('/', loginRequired, imageController.store);

export default router;
