import { Router } from "express";

import { motoController } from "../controllers/moto.controller";
import pool from '../database';

 class Moto{
    router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.post('/', motoController.saveMotoInfo);
        //this.router.get('/', listController.list)
        //this.router.get('/:id', listController.getOneList);
    }
}
const moto = new Moto();
export default moto.router