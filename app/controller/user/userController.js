import userRepository from '../../repositories/user';
import jwt from 'jsonwebtoken';
import config from '../../config';

const login = async (req, res, next) => {
	console.log('Inside login user');
	const { email, password } = req.body;
	const { secret } = config;
	const user = await userRepository.findOne({ email });
	if (!user) {
		return next({ error: 'email not found', message: 'Please sign up before login or provide correct email', status: 400 });
	}
	if (password !== user.password) {
		return next({ error: 'password not matched', message: 'Please provide correct passoword', status: 400 });
	}

	return res.status(200).send({ token: jwt.sign({ id: user._id, email: user.email }, secret) });
}

export default { login }; 