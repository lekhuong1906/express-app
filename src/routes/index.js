import express from 'express';
import newRoute from './new.js';

export default function route(app) {
    app.use('/news', newRoute);
}
