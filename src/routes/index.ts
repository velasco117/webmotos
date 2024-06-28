import { Router } from "express";

import { indexController } from "../controllers/index.controller";
import pool from '../database';

 class Index{
    router: Router = Router();
    constructor(){
        this.config();
    }
    config(){
        this.router.get('/', indexController.Index);
        this.router.post('/', indexController.IndexPost)
        this.router.get('/clients/', indexController.client)
    }
}
const index = new Index();
export default index.router 