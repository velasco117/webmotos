import { Request, Response } from "express";

import pool from '../database';

class ListController{
    public async list(req: Request, res: Response){
        const result = await pool.query('SELECT idList, name, model, imagePath FROM lista')
        res.json(result)
    }
    public async getOneList(req: Request, res: Response){
        const id = req.params.id
        const result = await pool.query('SELECT idList, name FROM lista where idList = ?', [id])
        const ress = result[0];
        res.json(ress)
    }
    public async saveList(req: Request, res: Response){
        const {name, model} = req.body;
        const imagePath = req.file.path;
        const newlist = {
            name,
            model,
            imagePath
        }
        const result = await pool.query('INSERT INTO lista set ?', [newlist])
        console.log(req.body)
        res.json({text: 'saving'})
    }
}
export const listController = new ListController();