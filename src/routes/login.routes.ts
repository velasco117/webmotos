import { Router } from "express";

import { loginController } from "../controllers/login.controller";

class Login{
    router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.post('/signin/', loginController.signin);
        this.router.post('/signup/', loginController.signup);
        //this.router.get('/', listController.list)
        //this.router.get('/:id', listController.getOneList);
    }
}
const login = new Login();
export default login.router