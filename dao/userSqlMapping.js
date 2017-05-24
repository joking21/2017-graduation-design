/**
 * Created by setting on 2017/1/11.
 */
var user = {
    insert:'INSERT INTO user(name,password,type,userName,sex,phone,mail,company,address,idCard) VALUES(?,?,?,?,?,?,?,?,?,?)',
    select:'select password from user where name=? ',
    selectId:'select id from user where name=? ',
    selectMessage:'select * from user where name=?',
    update:'update user set password=? where id=?',
    selectAdmin:'select password from admin where name=? ',
    selectAll:'select * from user',
    deleteuser: 'delete from user where id=?',
    // queryById: 'select * from user where id=?',
    // queryAll: 'select * from user'
};
module.exports = user;