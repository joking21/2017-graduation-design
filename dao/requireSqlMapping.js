/**
 * Created by joking on 2017/3/20.
 */
var require = {
        insert:'INSERT INTO requirest(title,content,user,time,status,userName) VALUES(?,?,?,?,?,?)',
        select:'select * from requirest where user=? ',
        selectAll:'select * from requirest',
        selectDetail:'select * from requirest where id = ?',
        selectStatus:'select * from requirest where status = ?',
         // updateStatus:'update requirest set status=? where id=?',
    updateStatus:'update requirest set status = ? where id = ?'
        // delete: 'delete from user where id=?',
        // queryById: 'select * from user where id=?',
        // queryAll: 'select * from user'
    };
module.exports = require;