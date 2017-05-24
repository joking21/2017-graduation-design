/**
 * Created by joking on 2017/3/20.
 */
var express = require('express');
var router = express.Router();
var requireDao = require('../dao/requireDao')
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
// 增加需求
router.get('/addrequire', function(req, res, next) {
    requireDao.add(req, res, next);
});
//查询所有需求
router.get('/selectAll', function(req, res, next) {
    requireDao.selectall(req, res, next);
});

//查询当前用户发布的需求
router.get('/selectMesBySelf', function(req, res, next) {
    requireDao.selectMy(req, res, next);
});
//查询需求详情
router.get('/selectDetail', function(req, res, next) {
    requireDao.selectDetail(req, res, next);
});

//查询所有未处理订单
router.get('/selectformStatus', function(req, res, next) {
    requireDao.selectStatus(req, res, next);
});

//更新订单状态
//查询所有未处理订单
router.get('/updateStatus', function(req, res, next) {
    requireDao.update(req, res, next);
});
module.exports = router;