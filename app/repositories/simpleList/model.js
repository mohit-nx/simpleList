import mongoose from 'mongoose';

import schema from './schema';

const simpleList = mongoose.model('simpleList', schema, 'simpleList');

export default simpleList;