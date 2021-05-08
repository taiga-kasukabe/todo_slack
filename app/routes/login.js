const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', {});
});

router.post('/', function(req, res, next){
    // var username = req.body.user;
    res.send([req.body.user, req.body.pass]);
});

module.exports = router;
