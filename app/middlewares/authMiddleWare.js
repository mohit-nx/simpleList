import jwt from 'jsonwebtoken';
import userRepository from '../repositories/user';
import config from '../config';

const authMiddleware = async (req, res, next) => {
	const { headers: { authorization } } = req;
	if (!authorization) {
		next({ error: 'Unauthorized', message: 'authorization not found', status: 403 });
	}

	const { secret } = config;
	let user;
	try {
		user = jwt.verify(authorization, secret);
	} catch (err) {
		next({ error: 'Unauthorized', message: 'User not Authorized', status: 403 });
	}

	console.log('User is', user);

	if (!user) {
		next({ error: 'Unauthorized', message: 'User not Authorized', status: 403 });
	}

	const userData = await userRepository.findOne({ _id: user.id });

	if (!userData) {
		next({ error: 'Unauthorized', message: 'Permission Denied', status: 403 });
	}

	req.user = userData;
	next();
}

export default authMiddleware