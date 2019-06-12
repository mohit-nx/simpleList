import { Router } from 'express';
import userController from './userController';

const routes = Router();

routes.post('/login', userController.login);

export default routes;