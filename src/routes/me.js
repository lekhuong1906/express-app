import express from 'express';
import MeController from '../app/controllers/MeController.js';

const route = express.Router();
const meController = new MeController();

route.get('/', meController.index);

export default route;
