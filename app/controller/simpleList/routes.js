import { Router } from 'express';

import simpleListcontorller from './simpleListController';
import validationHandler from '../../middlewares/validationHandler';
import validations from './validations';

const routes = Router();

routes.get('/', validationHandler(validations.list), simpleListcontorller.list);

routes.put('/:id', validationHandler(validations.update), simpleListcontorller.update);

routes.post('/', validationHandler(validations.create), simpleListcontorller.create);

routes.delete('/:id', validationHandler(validations.delete), simpleListcontorller.removeOne);

export default routes;