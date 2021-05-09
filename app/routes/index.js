const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const express = require('express');
const router = express.Router();
const connection = require('../dbconnect')

const con = connection.createConnect();

/* GET home page. */
router.get('/', (req,res,next) => {
    if (req.isAuthenticated()) {
        next();
    }else{
     res.redirect('/login');
    }
    },
    (req, res, next)=> {
    const userid = req.user;
  con.query(
    'SELECT * FROM contents WHERE user_id = ?', [userid],
    (error, results) => {
      res.render('index', { items: results });
    }
  );
  // con.end();
});


module.exports = router;


