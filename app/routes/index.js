const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: req.user, isAuth: req.isAuthenticated() });
});

module.exports = router;

