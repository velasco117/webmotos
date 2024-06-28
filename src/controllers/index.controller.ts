import { Request, Response } from "express";

import pool from '../database';

class IndexController{
    public async Index(req: Request, res: Response){
        res.send('index')
    }
    public async IndexPost(req: Request, res: Response){
        console.log(req.body)
        res.json({text: 'welcome', res: req.body} )
    }
    public async client(req: Request, res: Response): Promise<void>{
        const row = await pool.query('select * from clientes')
        res.json(row)
    }
}
export const indexController = new IndexController();