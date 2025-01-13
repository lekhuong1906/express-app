import newRoute from './new.js';
import siteRoute from './site.js';
import courseRoute from './course.js';
import meRoute from './me.js'

export default function route(app) {
    app.use('/news', newRoute);
    app.use('/courses', courseRoute);
    app.use('/me', meRoute);
    app.use('/', siteRoute);
}
