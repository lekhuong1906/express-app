import newRoute from './new.js';
import siteRoute from './site.js';

export default function route(app) {
    app.use('/news', newRoute);
    app.use('/', siteRoute);
}
