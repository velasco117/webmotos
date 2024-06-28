import express, { Application, urlencoded } from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import passport from 'passport';

import index  from './routes/index';
import list from "./routes/list.routes";
import gallery from './routes/gallery.routes';
import moto from "./routes/moto.routes";
import login from "./routes/login.routes";
import passportMiddlewere from "./middlewares/passport";

class App {
    public server: Application = express()

    constructor() {
        this.config();
        this.routes();
    }
    config() {
        this.server.set('port', process.env.PORT || 4500);
        this.server.use(morgan('dev'));
        this.server.use(cors());
        this.server.use(express.json());
        this.server.use(urlencoded({extended: true}));
        this.server.use(passport.initialize())
        passport.use(passportMiddlewere)
    }
    routes(){
        this.server.use('/api',index);
        this.server.use('/api/list', list);
        this.server.use('/api/gallery', gallery);
        this.server.use('/api/moto', moto)
        this.server.use('/api', login)
        this.server.use('/uploads', express.static(path.resolve('uploads')))
    }
}
export const app = new App()