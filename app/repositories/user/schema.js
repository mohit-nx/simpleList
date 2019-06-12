import { Schema } from 'mongoose';

const user = new Schema({
	email: String,
	password: String
});

export default user;
