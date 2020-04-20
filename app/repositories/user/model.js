import mongoose from 'mongoose';

import schema from './schema';

const user = mongoose.model('user', schema, 'user');

export default user;