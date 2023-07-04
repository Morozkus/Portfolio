import { Request, Response, Router } from 'express';
import renderHandler from '../handlers/renderHandler.js';
import checkRout from '../middlware/checkRout.js';

const CatalogRouter = Router()

// CatalogRouter.get('/', function (req, res) {
//     renderHandler(res, 200, './home/home.hbs', {title: 'Home', href: 'home'})
// })

CatalogRouter.get('/project/:catalog', checkRout('project'), function (req: Request, res: Response) {

    const catalog = req.params.catalog
    renderHandler(res, 200, `project/${catalog}.hbs`, { title: catalog, href: 'project' })

})

CatalogRouter.get('/books/:catalog', checkRout('books'), function (req: Request, res: Response) {

    const catalog = req.params.catalog
    renderHandler(res, 200, `books/${catalog}.hbs`, { title: catalog, href: 'books' })

})

export default CatalogRouter