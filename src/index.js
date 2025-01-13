import express from 'express';
import { engine } from 'express-handlebars';
import * as path from 'path';
import route from './routes/index.js';
import methodOverride from 'method-override';
import * as db from './config/db/index.js';
const __dirname = import.meta.dirname;

//db_connect
db.connect();

const app = express();

app.use(express.static(path.join(__dirname, '/public')));

// Middleware để xử lý dữ liệu body
app.use(express.json()); // Xử lý dữ liệu JSON
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

//config view engine
app.engine(
    '.hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        }
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//init route
route(app);

app.listen(3000);
