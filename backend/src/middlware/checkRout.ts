import { NextFunction, Request, Response } from "express"
import fs from 'fs'

export function getCatalog(catalog: string) {

    return function checkRout(req: Request, res: Response, next: NextFunction): void {


        const filePath: string = `./views/${catalog}/${req.params.catalog}.hbs`

        fs.access(filePath, fs.constants.F_OK, (err) => {
            if (err) {
                console.log(err.message);
                
                return res.redirect('/err')
            }
            next()
        });
    }
}

export function getCard(catalog: string) {

    return function checkRout(req: Request, res: Response, next: NextFunction): void {


        const filePath: string = `./views/${catalog}/${req.params.catalog}/${req.params.card}.hbs`

        fs.access(filePath, fs.constants.F_OK, (err) => {
            if (err) {
                console.log(err.message);
                
                return res.redirect('/err')
            }
            next()
        });
    }
}