import { Request, Response, Router } from 'express';
import renderHandler from '../handlers/renderHandler.js';
import { getCatalog } from '../middlware/checkRout.js';

const CatalogRouter = Router()

CatalogRouter.get('/project/:catalog', getCatalog('project'), function (req: Request, res: Response) {

    const catalog = req.params.catalog
    renderHandler(res, 200, `project/${catalog}.hbs`, { title: catalog, href: 'project' })

})

CatalogRouter.get('/books/:catalog', getCatalog('books'), function (req: Request, res: Response) {

    const catalog = req.params.catalog
    renderHandler(res, 200, `books/${catalog}.hbs`, { title: catalog, href: 'books' })

})

export default CatalogRouter