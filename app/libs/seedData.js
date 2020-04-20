import userRepository from '../repositories/user';
import config from '../config';

export default async () => {
	const usercount = await userRepository.count();
	if (usercount === 0) {
		console.log('Data seeding in progress');
		await userRepository.create({ email: 'mhtdang94@gmail.com', password: config.password });
	}
}