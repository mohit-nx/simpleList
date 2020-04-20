import { Router } from 'express';
import simpleList from './controller/simpleList/routes';
import user from './controller/user/routes';
import auth from './middlewares/authMiddleWare';

const route = Router();
route.use('/health-check', (req, res) => {
	res.send("I AM OK!");
})

route.use('/simple-list', auth, simpleList);
route.use('/user', user);

export default route;