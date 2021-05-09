const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const express = require('express');
const router = express.Router();
const connection = require('../dbconnect')

const con = connection.createConnect();

/* GET home page. */
router.get('/', function (req, res, next) {
  con.query(
    'SELECT * FROM contents WHERE user_id = ?', ['kasukabe01'],
    (error, results) => {
      res.render('index', { items: results });
    }
  );
  // con.end();
});

router.post('/', (req, res, next) => {
  console.log(req.body.id);
  // con.query(
  //   'SELECT* FROM contents WHERE id =?',
  //   [req.body.id], (error, results) => { }
  // );
})

module.exports = router;

