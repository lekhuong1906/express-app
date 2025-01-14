import { CourseModel } from '../models/Course.js';
import * as ultil from '../../util/mongoose.js'

export default class CourseController {
    //[GET] /courses
    async index(req, res, next) {
        let courses = (await CourseModel.find({}));
        res.render('courses/index', { courses: ultil.multipleMongooseToObject(courses) });
    }

    //[GET] /courses/:id
    async show(req, res, next) {
        let id = req.params.id;
        let course = (await CourseModel.findById(id));
        res.render('courses/show', { course: ultil.mongooseToObject(course) });
    }

    //[GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    //[POST] /courses/store
    store(req, res, next) {
        const course = new CourseModel({ name: req.body.name, description: req.body.description });
        course.save().then(() => {
            res.redirect('/courses');
        })
    }

    // [GET] /courses/:id/edit
    async edit(req, res, next) {
        let course = await CourseModel.findById(req.params.id);

        res.render('courses/edit', { course: ultil.mongooseToObject(course) })
    }

    // [PUT] /courses/:id/update
    update(req, res, next) {
        CourseModel.updateOne({ _id: req.params.id, name: req.body.name, description: req.body.description }).then(() => res.redirect('/me')).catch(next);
    }

    // [DELETE] /courses/:id/destroy
    destroy(req, res, next) {
        CourseModel.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
}
