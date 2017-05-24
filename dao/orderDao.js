/**
 * Created by joking on 2017/3/22.
 */
// 实现与MySQL交互
var mysql = require('mysql');
var $conf = require('../conf/db');
var $sql = require('./orderSqlMapping');
var $util =  require('../util/util')
// 使用连接池，提升性能
var pool  = mysql.createPool($conf.mysql);
module.exports = {
    add: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            // 获取前台页面传过来的参数
            var param = req.query || req.params;
            // 建立连接，向表中插入值
            connection.query($sql.insert, [param.req_id,param.user_id,param.time,param.receiveName], function(err, result) {
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
            var param = req.query || req.params;
            connection.query($sql.select, [param.id], function(err, result) {
                $util.jsonWrite(res, result);
                connection.release();
            });
        });
    },
    delete:function (req, res, next) {
        pool.getConnection(function(err, connection) {
            var param = req.query || req.params;
            connection.query($sql.delete, [param.req_id], function(err, result) {
                $util.jsonWrite(res, result);
                connection.release();
            });
        });
    },
    selecteSuccess:function (req, res, next) {
      pool.getConnection(function(err, connection) {
        var param = req.query || req.params;
        connection.query($sql.selectSuccess, [param.status], function(err, result) {
            $util.jsonWrite(res, result);
            connection.release();
        });
    });
    },
    selecteNew:function (req, res, next) {
        pool.getConnection(function(err, connection) {
        var param = req.query || req.params;
        connection.query($sql.selectNew, [param.status], function(err, result) {
            $util.jsonWrite(res, result);
            connection.release();
        });
    });
    },
    selectSuccessByself:function (req, res, next) {
        pool.getConnection(function(err, connection) {
            var param = req.query || req.params;
            connection.query($sql.selectSuccessByself, [param.status,param.user], function(err, result) {
                $util.jsonWrite(res, result);
                connection.release();
            });
        });
    },
    assess:function (req, res, next) {
        pool.getConnection(function(err, connection) {
            var param = req.query || req.params;
            connection.query($sql.access, [param.user_id,param.content,param.req_id], function(err, result) {
                $util.jsonWrite(res, result);
                connection.release();
            });
        });
    },
    accessSelect:function (req, res, next) {
        pool.getConnection(function(err, connection) {
            var param = req.query || req.params;
            connection.query($sql.accessSelect, [param.req_id], function(err, result) {
                $util.jsonWrite(res, result);
                connection.release();
            });
        });
    }
};