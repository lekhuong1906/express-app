import express from 'express';
import { engine } from 'express-handlebars';
import * as path from 'path';
import route from './routes/index.js';
const __dirname = import.meta.dirname;

const app = express();
console.log(path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '/public')));

app.engine(
    '.hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.get('/', function (req, res) {
    // res.send('abc')
    res.render('home');
});

app.listen(3000);
