import { CourseModel } from '../models/Course.js';
import * as ultil from '../../util/mongoose.js'

export default class MeController {
    //[GET] /courses
    async index(req, res, next) {
        let coursesQuery = CourseModel.find();

        const isValidType = ['asc', 'desc'].includes(req.query.type);
        if (req.query.hasOwnProperty('_sort')) {
            coursesQuery = coursesQuery.sort({
                [req.query.column]: isValidType ? (req.query.type == 'asc' ? 1 : -1) : 1
            })
        }

        const courses = await coursesQuery;

        res.render('me/index', { courses: ultil.multipleMongooseToObject(courses) });
    }

    async trash(req, res, next) {
        let courses = (await CourseModel.findDeleted({}));
        res.render('me/trash', { courses: ultil.multipleMongooseToObject(courses) });
    }
}
