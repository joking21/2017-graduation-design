var express = require('express');
var router = express.Router();
var userDao = require('../dao/userDao')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// 增加用户
router.get('/addUser', function(req, res, next) {
    userDao.add(req, res, next);
});
// 登陆
router.get('/selUser', function(req, res, next) {
    userDao.select(req, res, next);
});
// 查询id
router.get('/selUserId', function(req, res, next) {
    userDao.selectId(req, res, next);
});
// 通过id查询用户信息
router.get('/selUserMes', function(req, res, next) {
    userDao.selectMessage(req, res, next);
});

// 通过id更新用户密码
router.get('/updatepassword', function(req, res, next) {
    userDao.update(req, res, next);
});
//查询管理员

router.get('/selectAdminPass', function(req, res, next) {
    userDao.selectAdmin(req, res, next);
});

//所有用户
router.get('/selectAll', function(req, res, next) {
    userDao.selectAll(req, res, next);
});
//删除用户
router.get('/deleteUser', function(req, res, next) {
    userDao.deleteuser(req, res, next);
});
module.exports = router;
