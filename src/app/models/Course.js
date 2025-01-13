import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
    name: { type: String, require: true, default: 'hahaha' },
    description: { type: String, require: true, min: 18, index: true },
}, {
    timestamps: true
});

const CourseModel = mongoose.model('Course', Course);

export { CourseModel };