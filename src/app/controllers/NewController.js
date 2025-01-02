import { BlogModel } from '../models/Blog.js';

export default class NewController {
    async index(req, res, next) {
        // BlogModel.find({}).then(blogs => res.render('new',{
        //     blogs : blogs
        // })).catch(next);
        let Blog = (await BlogModel.find({}, {}, {})).lean().map((b) => b.toObject());
        res.render('new', { Blog });
    }
}
