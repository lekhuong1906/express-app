import mongoose from 'mongoose';

await mongoose.connect('mongodb://MongoDB-7.0/').then(() => console.log('Connected!'));
