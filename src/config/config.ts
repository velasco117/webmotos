export default {
    database: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'dbmotos'
    },
    jwtSecret: process.env.JWT_SECRET || 'tokenIstoken'
};