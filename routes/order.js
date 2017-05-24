/**
 * Created by joking on 2017/3/22.
 */
var express = require('express');
var router = express.Router();
var order = require('../dao/orderDao')
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
//新增订单
router.get('/addOrder', function(req, res, next) {
    order.add(req, res, next);
});
// 查询订单情况
router.get('/selectOrder', function(req, res, next) {
    order.select(req, res, next);
});
//删除订单
router.get('/deleteOrder', function(req, res, next) {
    order.delete(req, res, next);
});
// 查询成功的订单情况
router.get('/selectSuccess', function(req, res, next) {
    order.selecteSuccess(req, res, next);
});
// 查询新发布订单
router.get('/selectNew', function(req, res, next) {
    order.selecteNew(req, res, next);
});
// 查询用户自己发布订单成功
router.get('/selectSuccessByself', function(req, res, next) {
    order.selectSuccessByself(req, res, next);
});
// 查询用户自己发布订单成功
router.get('/assess', function(req, res, next) {
    order.assess(req, res, next);
});
// 查看评价
router.get('/accessSelect', function(req, res, next) {
    order.accessSelect(req, res, next);
});
module.exports = router;
