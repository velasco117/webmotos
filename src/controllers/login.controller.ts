import { Request, Response } from "express";
import jwt from "jsonwebtoken";

import pool from '../database';
import {Iuser} from "../models/user";
import config from '../config/config';

function createToken(user: Iuser){
    return jwt.sign({
        id: user.id, 
        email: user.email, 
        name: user.name, 
        lastname: user.lastname,
        identification: user.indentification
    }, config.jwtSecret)
}

class LoginController{
    public async signup(req: Request, res: Response){
        const {name, lastname, email, identification, password} = req.body;
        if(!name || !lastname || !email || !identification || !password){
            return res.status(400).json({msg: 'please. send your information'})
        }else {
            const newUser = {name, lastname, email, identification, password}
            console.log(newUser)
            await pool.query('INSERT INTO clientes set ?', [newUser])
            res.json(newUser)
        }
    }
    public async signin(req: Request, res: Response){
        const {email, password} = req.body;
        //console.log(req.body)
        if(!email || !password){
            return res.status(400).json({msg: 'please, send your email and password'})
        }else{
            const users = await pool.query('SELECT * FROM clientes WHERE email = ?', [email]);4
            if(users.length> 0){
                const user = users[0];
                const valid = user.password == password;
                if(valid){
                    res.json({token: createToken(user)})
                }else {
                    res.json({err: 'contraseña incorrecta'})
                }

            }else{
                res.json({err: 'datos no encontrados'})
            }
            
        }
    }
}
export const loginController = new LoginController();