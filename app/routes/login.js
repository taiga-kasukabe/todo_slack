//login.jsでは，
//user_name, passwordをejsから受け取る
//auth.jsにおくる
//true→セッションを張る
//false→redirect
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const express = require('express');
const router = express.Router();
const auth = require('../auth');

const app = express();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('login', {});
});

router.post('/', function (req, res, next) {
    if (auth.auth(req.body.user, req.body.pass)) {
        //セッション
        app.set('trust proxy', 1)
        app.use(session({
            secret: 'keyboard cat',
            resave: false,
            saveUninitialized: true,
            cookie: { secure: true }
        }))
        res.render('index', {user_id : req.body.user});
    }
    else {
        res.redirect('/login');
    }
});

module.exports = router;
