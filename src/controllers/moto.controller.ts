import { Request, Response } from "express";

import pool from '../database';

class MotoController{
    public async motoInfo(req: Request, res: Response){
       // const result = await pool.query('SELECT idList, name, model, imagePath FROM lista')
        res.json({text: 'galeria'})
    }
    public async getOneMotoInfo(req: Request, res: Response){
        const id = req.params.id
        const result = await pool.query('SELECT idList, name FROM lista where idList = ?', [id])
        const ress = result[0];
        res.json(ress)
    }
    public async saveMotoInfo(req: Request, res: Response){
        const {description, potencia, torque, peso, costo, idList} = req.body;
        const newlist = {
            description,
            potencia,
            torque,
            peso,
            costo,
            idList,
        }
        const result = await pool.query('INSERT INTO moto set ?', [newlist])
        console.log(newlist)
        res.json({text: 'saving'})
    }
}
export const motoController = new MotoController();