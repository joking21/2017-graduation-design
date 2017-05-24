/**
 * Created by joking on 2017/3/26.
 */
var express = require('express');
var router = express.Router();
var adminDao = require('../dao/adminDao')
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
// 管理员登陆
router.get('/selectPass', function(req, res, next) {
    adminDao.select(req, res, next);
});
