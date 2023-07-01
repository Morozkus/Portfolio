/* eslint-disable @typescript-eslint/no-var-requires */
import express from 'express';
import expressHandlebars from 'express-handlebars';
import cookieParser from 'cookie-parser';

import renderHandler from './handlers/renderHandler.js';
import basicRouter from './routers/router.js';

const handlebars = expressHandlebars.create({
    defaultLayout: 'main',
    extname: 'hbs'
});
const app = express();

type TYPEPORT =  string | number
const PORT:TYPEPORT = process.env.PORT || 7007

app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('views'))

app.use('/', basicRouter);

app.use(function (req, res) {
    renderHandler(res, 404, './error/error.hbs', {title: 'Page Not Found', href: 'error'})
})

app.listen(PORT, () => {
    console.log(`server started to the port ${PORT}`);
})