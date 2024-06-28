import { Request, Response } from "express";

import pool from '../database';

class GalleryController{
    public async gallery(req: Request, res: Response){
       // const result = await pool.query('SELECT idList, name, model, imagePath FROM lista')
        res.json({text: 'galeria'})
    }
    public async getOneGallery(req: Request, res: Response){
        const id = req.params.id
        const result = await pool.query('SELECT idList, name FROM lista where idList = ?', [id])
        const ress = result[0];
        res.json(ress)
    }
    public async savegallery(req: Request, res: Response){
        const {idList} = req.body;
        const imagePath = req.file.path;
        const newlist = {
            imagePath,
            idList,
        }
        const result = await pool.query('INSERT INTO galeria set ?', [newlist])
        console.log(req.body)
        res.json({text: 'saving'})
    }
}
export const galleryController = new GalleryController();