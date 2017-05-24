/**
 * Created by joking on 2017/3/26.
 */
// 实现与MySQL交互
var mysql = require('mysql');
var $conf = require('../conf/db');
var $sql = require('./adminSqlMapping');
var $util =  require('../util/util')
// 使用连接池，提升性能
var pool  = mysql.createPool($conf.mysql);
module.exports = {
    //登陆
    select: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            var param = req.query || req.params;
            connection.query($sql.select, [param.name], function(err, result) {
                $util.jsonWrite(res, result);
                connection.release();
            });
        });
    }

};