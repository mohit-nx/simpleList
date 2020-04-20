import mongoose from 'mongoose';
import seedData from './seedData';

const open = (mongoUri) => {
	return new Promise((resolve, reject) => {
		mongoose.connect(mongoUri,  { useNewUrlParser: true })

		mongoose.connection.on('error', err => {
			reject(err);
		});

		mongoose.connection.on('connected', async err => {
			await seedData();
			resolve();
		});


	})
}

export default open;