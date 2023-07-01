import {Router} from 'express';
import renderHandler from '../handlers/renderHandler.js';

const basicRouter = Router()

basicRouter.get('/', function (req, res) {
    renderHandler(res, 200, './home/home.hbs', {title: 'Home', href: 'home'})
})

export default basicRouter