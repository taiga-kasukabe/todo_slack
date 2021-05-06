const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.send('this is test1');
});

module.exports = router;
