import { Router } from 'express';

import userController from './userController';
import auth from '../../middlewares/authMiddleWare';

const routes = Router();

routes.post('/login', userController.login);

routes.get('/verify', auth, userController.verify);

export default routes;