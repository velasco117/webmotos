import mysql from "promise-mysql";

import config from "./config/config";

const pool = mysql.createPool(config.database);

pool.getConnection().
    then(connection => {
        pool.releaseConnection(connection)
        console.log('database is connect...')
})

export default pool