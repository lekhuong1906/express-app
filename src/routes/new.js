import express from 'express';
import NewController from '../app/controllers/NewController.js';

const route = express.Router();
const newsContronller = new NewController();

route.get('/', newsContronller.index);

export default route;
