var express = require('express');
var router = express.Router();
var path  = require('path');
var p = path.join(__dirname, '../public')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '网上物流' });
});
router.get('/a', function(req, res, next) {
    res.sendFile(p+'/a.html');
});


module.exports = router;
