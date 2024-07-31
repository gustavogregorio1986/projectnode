var express = require('express');
var router = express.Router();
const mysql = require("mysql");

/* GET users listing. */
router.get('/', function(req, res, next) {
  const dbconfig = require("../dbconfig");

  const db = mysql.createConnection(dbconfig);

  db.connect(err => {
      if(err) throw err;
      console.log("connected");
  });

  res.send('customers list');
});

module.exports = router;
