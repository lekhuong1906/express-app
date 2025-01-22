import mongoose from 'mongoose';
import MongooseDelete from 'mongoose-delete';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
    name: { type: String, require: true, default: 'hahaha' },
    description: { type: String, require: true, min: 18, index: true },
}, {
    timestamps: true,
    // query: {
    //     sortable(orderBy) {
    //         return this.sort({ name: orderBy });
    //     }
    // }
},);

Course.query.sortable = function (req) {
    const isValidType = ['asc', 'desc'].includes(req.query.type);
    if (req.query.hasOwnProperty('_sort')) {
        return this.sort({
            [req.query.column]: isValidType ? (req.query.type == 'asc' ? 1 : -1) : 1
        })
    }
};

Course.plugin(MongooseDelete, { deletedBy: true, deletedAt: true, deletedByType: String, overrideMethods: 'all' })

const CourseModel = mongoose.model('Course', Course);

export { CourseModel };