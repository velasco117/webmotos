import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import config from '../config/config';
import pool from '../database';

const opts: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwtSecret
}

export default new Strategy(opts, async (payload, done) =>{
    try {
        const users = await pool.query('SELECT * FROM clientes WHERE id = ?', [payload.id])
        if(users){
            const user = users[0];
            console.log(user)
            return done(null, user)
        }else{
            console.log('error es ')
        return done(null, false)
        }

    } catch (error) {
        console.log(error);
    }
})