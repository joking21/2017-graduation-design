/**
 * Created by setting on 2017/1/11.
 */
module.exports = {
    // 向前台返回JSON方法的简单封装
    jsonWrite : function (res, ret) {
        if(typeof ret === 'undefined') {
            res.json({
                code:'1',
                msg: '操作失败'
            });
        } else {
            res.json(ret);
        }
    }
};