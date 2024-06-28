import { Router } from "express";
import { authenticate } from "passport";

import { listController } from "../controllers/list.controller";
import pool from '../database';
import multer from "../libs/multer";

 class List{
    router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.post('/', multer.single('image'), listController.saveList)
        this.router.get('/', listController.list)
        this.router.get('/:id', listController.getOneList);
    }
}
const index = new List();
export default index.router