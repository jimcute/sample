var express = require('express');
let UserModel = require('../models/user.model');
const { use } = require('./users');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function (req, res, next) {
  const db = req.body.preferredDb;
  console.log('working', db);
  let data = [];

  if (db === 'mongo') {
    UserModel.find({}, (err, users) => {
      data = users;
      res.render('index', { title: 'Express', data: JSON.stringify(data), db });
    });
  } else if (db === 'mysql') {
    global.mysqlConnection.query('select * from user', function (error, results, fields) {
      if (error) throw error;
      data = results;
      res.render('index', { title: 'Express', data: JSON.stringify(data), db });
    });
  } else {
    res.render('index', { title: 'Express', data: [], db });
  }
});

module.exports = router;
