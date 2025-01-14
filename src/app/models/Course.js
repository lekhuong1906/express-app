import mongoose from 'mongoose';
import MongooseDelete from 'mongoose-delete';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
    name: { type: String, require: true, default: 'hahaha' },
    description: { type: String, require: true, min: 18, index: true },
}, {
    timestamps: true
});

Course.plugin(MongooseDelete, { deletedBy: true, deletedAt: true, deletedByType: String, overrideMethods: 'all' })

const CourseModel = mongoose.model('Course', Course);

export { CourseModel };