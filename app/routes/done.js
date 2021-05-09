const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const express = require('express');
const router = express.Router();
const connection = require('../dbconnect')


// handler for the /user/:id path, which prints the user ID
router.post('/done/:id', function (req, res, next) {
    res.end(req.params.id);
});


/* GET home page. */
// router.post('/:id', (req, res, next) => {
//     console.log(req.params.id);
//     con.query(
//       'SELECT* FROM contents WHERE id =?',
//       [req.body.id], (error, results) => { }
//     );

// });

router.get('/done/:id', (req, res) => {
console.log(req.params.id)
})

module.exports = router;
