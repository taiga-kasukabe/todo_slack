const connection = require('./dbconnect')
const bcypt = require('bcrypt') // パスワードハッシュ化


// ユーザー認証
// 引数 username: 文字列 ユーザー名
// 引数 passwd: 文字列 パスワード
// 戻り値 bool: 認証された場合 true 否認の場合 false
exports.authenticate = (user_id, passwd) => {
    let is_auth = false
    console.log(passwd)
    const con = connection.createConnect();
    con.connect();
    con.query(
        'SELECT * FROM users WHERE user_id = ?',[user_id],
        (error, results) => {
            console.log(results)
            if (results.length > 0){
                console.log(results[0].password)
                if (passwd == results[0].password) {
                    return  true
                } else {
                    return false
                }
                console.log(is_auth)
                console.log(passwd === results[0].password)
                return  true
            } else {
                return false
            }
        }
    )
    con.end()
    return is_auth
}
