const mysql = require('mysql');


exports.createPool = () =>{
    const env = process.env
    const pool = mysql.createPool({
        //環境変数からDB情報取得
        host: env.DB_HOST,
        user: env.DB_USER,
        password: env.DB_PASSWORD,
        database: env.DB_DATABASE
    });
    return pool
}
