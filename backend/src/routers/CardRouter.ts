import { Request, Response, Router } from 'express';
import renderHandler from '../handlers/renderHandler.js';
import { getCard } from '../middlware/checkRout.js';

const CardRouter = Router()

CardRouter.get('/project/:catalog/:card', getCard(`project`), function (req: Request, res: Response) {
    renderHandler(res, 200, `project/${req.params.catalog}/${req.params.card}.hbs`, {title: req.params.card, href: `project/${req.params.catalog}`, leftPanel: true})
})

CardRouter.get('/books/:catalog/:card', getCard(`books`), function (req: Request, res: Response) {
    renderHandler(res, 200, `books/${req.params.catalog}/${req.params.card}.hbs`, {title: req.params.card, href: `books/${req.params.catalog}`, leftPanel: true})
})

export default CardRouter