import express from 'express';
import SiteController from '../app/controllers/SiteController.js';

const route = express.Router();
const siteController = new SiteController();

route.get('/', siteController.index);

export default route;
