import express from 'express';
import CourseController from '../app/controllers/CourseController.js';


const route = express.Router();
const courseController = new CourseController();

route.get('/create',courseController.create);
route.post('/store',courseController.store);
route.get('/:id/show', courseController.show);
route.get('/:id/edit', courseController.edit);
route.delete('/:id/destroy', courseController.destroy);
route.put('/:id/update', courseController.update);
route.get('/', courseController.index);

export default route;
