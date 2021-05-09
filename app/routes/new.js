// const session = require('express-session');
// const express = require('express');
// const router = express.Router();

// // router.postに入力されたデータ
// //  Text
// // Task_
// // length.body.

// router.get('/', function (req, res, next) {
//     res.render('new',{});
// });

// router.post('/',function(req,res,next){
//     res.send(req.body.text)
// });

// router.post('/',function(req,res,next){
//     res.send(req.body.task_limit)
// });

// module.exports = router;


const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const express = require('express');
const router = express.Router();
const connection = require('../dbconnect')
const con = connection.createConnect();
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('new', {});
});
router.post('/',function(req,res,next){
    res.send(req.body.text)
});

router.post('/',function(req,res,next){
    res.send(req.body.task_limit)
});

    (req, res, next) => {
        const text = req.body.text;
        const task_limit = req.body.task_limit;
        const user_id = req.session.user_id;
 
        con.connect();
        con.query(
            'INSERT INTO contents (text, task_limit) VALUES(?, ?)',
            [text, task_limit], function (error, results, fields) {
                if (error) throw error;
                res.redirect('/');
            });
        con.end();
    },

module.exports = router;
















