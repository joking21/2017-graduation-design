/**
 * Created by setting on 2017/1/11.
 */
// dao/userDao.js
// 实现与MySQL交互
var mysql = require('mysql');
var $conf = require('../conf/db');
var $sql = require('./userSqlMapping');
var $util =  require('../util/util')
// 使用连接池，提升性能
var pool  = mysql.createPool($conf.mysql);
module.exports = {
    add: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            // 获取前台页面传过来的参数
            var param = req.query || req.params;
            // 建立连接，向表中插入值
            // 'INSERT INTO user(id, name, age) VALUES(0,?,?)',
            connection.query($sql.insert, [param.name,param.password,param.type,param.userName,param.sex,param.phone,param.mail,param.company,param.address,param.idCard], function(err, result) {
                if(result) {
                    result = {
                        code: 200,
                        msg:'增加成功'
                    };
                }

                // 以json形式，把操作结果返回给前台页面
                $util.jsonWrite(res, result);

                // 释放连接
                connection.release();
            });
        });
    },
    select: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            // 获取前台页面传过来的参数
            var param = req.query || req.params;
            // 建立连接，向表中插入值
            connection.query($sql.select, [param.name], function(err, result) {
                // 以json形式，把操作结果返回给前台页面
                $util.jsonWrite(res, result);

                // 释放连接
                connection.release();
            });
        });
    },
    selectId: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            // 获取前台页面传过来的参数
            var param = req.query || req.params;
            // 建立连接，向表中插入值
            connection.query($sql.selectId, [param.name], function(err, result) {
                // 以json形式，把操作结果返回给前台页面
                $util.jsonWrite(res, result);

                // 释放连接
                connection.release();
            });
        });
    },
    selectMessage: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            // 获取前台页面传过来的参数
            var param = req.query || req.params;
            // 建立连接，向表中插入值
            connection.query($sql.selectMessage, [param.name], function(err, result) {
                // 以json形式，把操作结果返回给前台页面
                $util.jsonWrite(res, result);

                // 释放连接
                connection.release();
            });
        });
    },
    update: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            // 获取前台页面传过来的参数
            var param = req.query || req.params;
            // 建立连接，向表中插入值
            connection.query($sql.update, [param.password,param.id], function(err, result) {
                // 以json形式，把操作结果返回给前台页面
                $util.jsonWrite(res, result);

                // 释放连接
                connection.release();
            });
        });
    },
    selectAdmin: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            // 获取前台页面传过来的参数
            var param = req.query || req.params;
            // 建立连接，向表中插入值
            connection.query($sql.selectAdmin, [param.name], function(err, result) {
                // 以json形式，把操作结果返回给前台页面
                $util.jsonWrite(res, result);

                // 释放连接
                connection.release();
            });
        });
    },
    selectAll: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            // 获取前台页面传过来的参数
            var param = req.query || req.params;
            // 建立连接，向表中插入值
            connection.query($sql.selectAll,  function(err, result) {
                // 以json形式，把操作结果返回给前台页面
                $util.jsonWrite(res, result);

                // 释放连接
                connection.release();
            });
        });
    },
    deleteuser: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            // 获取前台页面传过来的参数
            var param = req.query || req.params;
            // 建立连接，向表中插入值
            connection.query($sql.deleteuser, [param.id], function(err, result) {
                // 以json形式，把操作结果返回给前台页面
                $util.jsonWrite(res, result);

                // 释放连接
                connection.release();
            });
        });
    }
};