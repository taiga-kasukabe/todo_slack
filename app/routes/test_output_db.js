const connection = require('./dbconnect')
const express = require('express');
const router = express.Router();


// const connection = mysql.createConnection({
//     host: 'db',
//     user: 'appuser',
//     password: 'apppasswd',
//     database: 'data01'
// });
con = connection.createConnect()
router.get('/', (req, res)=>{
    con.connect();
   con.query(
       'SELECT * FROM contents',
       (error, results) => {
           res.render('test_db_output.ejs', { items: results });
       }
   );
    con.end();
});

module.exports = router;
