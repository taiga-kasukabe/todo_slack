const session = require('express-session');
const router = express.Router();

// router.postに入力されたデータ
//  Text
// Task_
// length.body.

router.get('/', function (req, res, next) {
    res.render('new',{});
});

router.post('/',function(req,res,next){
    res.send(req.body.text)
});