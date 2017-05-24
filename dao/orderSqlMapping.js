/**
 * Created by joking on 2017/3/22.
 */
var order = {
    insert:'INSERT INTO orders(req_id,user_id,time,receiveName) VALUES(?,?,?,?)',
    select:'select requirest.title,requirest.status,requirest.id,user.name,orders.time from ' +
    'user left join orders on user.id = orders.user_id ' +
    'left join requirest on orders.req_id = requirest.id where user.id = ?',
    delete:'delete from orders where req_id = ?',
    selectSuccess:'SELECT requirest.*,orders.* FROM requirest,orders WHERE requirest.id = orders.req_id AND requirest.status = ? ',
    selectSuccessByself:'SELECT requirest.*,orders.* FROM requirest,orders WHERE requirest.id = orders.req_id AND requirest.status = ? AND requirest.user = ? ',
    selectNew:'select * from  requirest where status = ? ',
    access:'INSERT INTO assess(user_id,content,req_id) VALUES(?,?,?)',
    accessSelect:'SELECT * from assess where req_id = ?'
};
module.exports = order;