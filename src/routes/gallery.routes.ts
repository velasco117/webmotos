import { Router } from "express";

import { galleryController } from "../controllers/gallery.controller";
import pool from '../database';
import multer from "../libs/multer";

 class Gallery{
    router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.post('/', multer.single('image'), galleryController.savegallery)
        //this.router.get('/', listController.list)
        //this.router.get('/:id', listController.getOneList);
    }
}
const gallery = new Gallery();
export default gallery.router