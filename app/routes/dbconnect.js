const mysql = require('mysql');


const createConnect = () =>{
    const connection = mysql.createConnection({
        //環境変数からDB情報取得
        // host: process.env.DB_HOST,
        // user: process.env.DB_USER,
        // password: process.env.DB_PASSWORD,
        // database: process.env.DATABASE
        // 暫定で直書き
        host: 'db',
        user: 'appuser',
        password: 'apppasswd',
        database: 'data01'
    });
    return connection
}

export default createConnect;
