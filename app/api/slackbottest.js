// APIトークンを指定する

// OSの環境変数に定義してあれば「process.env.[環境変数名]」で読み込み可能
var api_token = process.env.BOT_API_TOKEN
if (!api_token) {
    console.log('Error: Specify token in environment');
    process.exit(1);
}
 
// ライブラリのパスは修正が必要
const Botkit = require('botkit');
const os = require('os');
 
const controller = Botkit.slackbot({
    debug: true,
});
 
// APIトークンを読み込んで起動、応答を受け付ける状態になる
const bot = controller.spawn({
    token: api_token
}).startRTM();
 
 
// これ以降のコードはBotの応答に関する記述
 
// 応答の追加 「こんにちは」に対して「こんにちは」を返す
controller.hears(['こんにちは'], 'direct_message,direct_mention,mention', function(bot, message) {
 
    controller.storage.users.get(message.user, function(err, user) {
        bot.reply(message, 'こんにちは!');
    });
 
 
});
