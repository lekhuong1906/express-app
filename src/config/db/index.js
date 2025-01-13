import mongoose from 'mongoose';

async function connect() {
    try {
        mongoose.set('debug', true);
        
        await mongoose.connect('mongodb://MongoDB-7.0/blog').then(() => console.log('Connected!'));
    } catch (error) {
        console.log('Connect failure !!!');
    }
}

export { connect };
