const connection = require('./dbconnect')
const bcypt = require('bcrypt')

// ユーザー認証
// 引数 username: 文字列 ユーザー名
// 引数 passwd: 文字列 パスワード
// 戻り値 : 認証された場合 true 否認の場合 false
exports.auth = (username, passwd) => {

    if (hoge){
        return true
    } else{
      return false
    }
}
