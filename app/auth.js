const connection = require('./dbconnect')
const bcypt = require('bcrypt') // パスワードハッシュ化


// ユーザー認証
// 引数 username: 文字列 ユーザー名
// 引数 passwd: 文字列 パスワード
// 戻り値 : 認証された場合 true 否認の場合 false
exports.auth = (username, passwd) => {
    const con = connection.createConnect();
    con.connect();
    con.query(
        'SELECT * FROM users WHERE username = ?',[username],
        (error, results) => {
            // 入力されたユーザーネームのユーザーが存在するか
            if (results.length > 0){
                // 入力されたパスワードがDBと一致するか
                if (passwd === results[0].password) {
                    return true;
                } else {
                    return false;
                }
            } else {
                // ユーザーネームが違う
                return false;
            }
        }
    );
};
