const connection = require('./dbconnect')
const bcypt = require('bcrypt') // パスワードハッシュ化
const passport = require('passport')
const LocalStrategy = require('passport-local');


const con = connection.createConnect();
passport.use(new LocalStrategy(
    {
        _useridField: "userid",
        _passwordField: 'password'
    },(userid, password, done) => {
        con.connect();
        con.query(
            'SELECT * FROM users WHERE user_id = ?',
            [userid],
            (error, results) => {
                if (results.length > 0){
                    if (password == results[0].password){
                        return done(null, results[0]);
                    }else{
                        return done(null, false, {message: "Invalid Password"})
                    }
                }else{
                    return done(null, false, {message: "Invalid User"})
                }
            }
        )
    }

))

module.exports = passport



// ユーザー認証
// 引数 username: 文字列 ユーザー名
// 引数 passwd: 文字列 パスワード
// 戻り値 bool: 認証された場合 true 否認の場合 false
// exports.authenticate = (user_id, passwd) => {
//     let is_auth = false
//     console.log(passwd)
//     const con = connection.createConnect();
//     con.connect();
//     con.query(
//         'SELECT * FROM users WHERE user_id = ?',[user_id],
//         (error, results) => {
//             console.log(results)
//             if (results.length > 0){
//                 console.log(results[0].password)
//                 if (passwd == results[0].password) {
//                     return  true
//                 } else {
//                     return false
//                 }
//                 console.log(is_auth)
//                 console.log(passwd === results[0].password)
//                 return  true
//             } else {
//                 return false
//             }
//         }
//     )
//     con.end()
//     return is_auth
// }
