import express from 'express';
import NewController from '../app/controllers/NewController.js';

const route = express.Router();
const newsController = new NewController();

route.get('/', newsController.index);

export default route;
