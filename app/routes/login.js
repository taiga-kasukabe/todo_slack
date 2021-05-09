const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('login');
});

router.post('/', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true,
}));

// router.post('/', (req, res) => {
//     res.send(req.body)
// })


module.exports = router;
