const mysql = require('mysql');


exports.createConnect = () =>{
    const env = process.env
    const connection = mysql.createConnection({
        //環境変数からDB情報取得
        host: env.DB_HOST,
        user: env.DB_USER,
        password: env.DB_PASSWORD,
        database: env.DB_DATABASE
        // 暫定で直書き
        // host: 'db',
        // user: 'appuser',
        // password: 'apppasswd',
        // database: 'data01'
    });
    return connection
}
