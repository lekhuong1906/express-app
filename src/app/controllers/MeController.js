import { CourseModel } from '../models/Course.js';
import * as ultil from '../../util/mongoose.js'

export default class MeController {
    //[GET] /courses
    async index(req, res, next) {
        let courses = (await CourseModel.find({}));
        res.render('me/index', { courses: ultil.multipleMongooseToObject(courses) });
    }

    
}
