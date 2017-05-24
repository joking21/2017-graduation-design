/**
 * Created by lenovo on 2017/3/28.
 */
jQuery(".header").load("header.html");
jQuery(".footer").load("footer.html");
setTimeout(function(){
    $("#headerStyle li").removeClass('active');
},100);
var userName =sessionStorage.getItem('loginName');
var userId ;
var type ;
var orderId;
$.get("/users/selUserMes",{name:userName},function(data){
    console.log(data);
    data[0].typeStr = getType(data[0].type);
    replaceElementInnerText($("#tab-1"),data[0]);
    userId = data[0].id;
    type = data[0].type;
    $("#changePassword").attr('href','/changePassword.html?userName='+userName);
},'json').done(function(){
    //获取最新需求
    $.get("/requires/selectMesBySelf",{user:userId},function(data){
        var temp = $("#newRequire_template").children().prop('outerHTML');
        for(var i in data){
            var item = data[i];
            item.timestr = formatTimeToStr(item.time);
            var $temp = $(temp);
            replaceElementInnerText($temp,item);
            $("#newRequire_list").append($temp);
        }
        console.log(data);
    },'json').done(function(){
        //获取当前订单
        $.get("/order/selectOrder",{id:userId},function(data) {
            var temp = $("#orderReceive_template").children().prop('outerHTML');
            if(data[0].id){
                for (var i in data) {
                    var item = data[i];
                    item.timeStr = formatTimeToStr(item.time);
                    item.typeStr = getStatus(item.status);
                    var $temp = $(temp);
                    replaceElementInnerText($temp, item);
                    $("#orderReceive_list").append($temp);
                }
            }else{
                $("#orderReceive_list").append("<tr><td colspan='5'>当前没有您受理的订单</td></tr>");
            }
            cancel();
            changeStatus();
            console.log(data);
            sawass();
        },'json').done(function(){
            //获取自己发布订单成功的订单
            $.get('/order/selectSuccessByself',{status:4,user:userId},function(data){
                console.log(data);
                var temp = $("#success_template").children().prop('outerHTML');
                var j =1;
                for(var i in data){
                    var item = data[i];
                    var $temp = $(temp);
                    item.index = j;
                    item.timeStr = formatTimeToStr(item.time) ;
                    replaceElementInnerText($temp,item);
                    $("#success_list").append($temp);
                    j++;
                }
                accessCon();
            },'json');
        })
    })
})
setTimeout(function(){
    if(type==1){
        $("#t3").remove();
    }else{
        $("#t2").remove();
        $("#t4").remove();
    }
},100)

//取消运输
function cancel(){
    $("a[name=cancel]").click(function(){
        var id  = $(this).attr('data-id')
        layer.confirm('您确定要取消该交易吗？', {
            btn: ['确认', '取消'] //按钮
        }, function () {
            console.log('11');
            $(".layui-layer-btn1").trigger('click');
            $.get("/order/deleteOrder",{req_id:id},function(data){
                console.log(data);
                if(data.protocol41){
                    $.get("/requires/updateStatus",{id:id,status:1},function(data){
                        console.log(data);
                        if(data.protocol41){
                            layer.msg('取消交易成功！', {icon: 6, time: 4000,});
                            window.location.href='/myCenter.html';
                        }
                    })
                }
            },'json')
        }, function () {
//                layer.msg('取消操作！', {icon: 2, time: 4000,});
        });
    })
}
//更改用户类型
function getType(type){
    var str;
    if(type ==1){
        str="企业用户";
    }
    else if(type==2){
        str="物流公司用户";
    }
    else{
        str="普通用户";
    }
    return str;
}

//状态字段
function getStatus(status){
    var str;
    switch(status){
        case 1:
            str = "未运输";
            break;
        case 2:
            str = "已受理";
            break;
        case 3:
            str = "运输中";
            break;
        case 4:
            str = "交易成功";
            break;
        default:
            str = "未知";
            break;
    }
    return str;
}

//运输员更改状态
function changeStatus(){
    $("a[name=changeStatus-onload]").click(function(){
        var dataId = $(this).attr('data-id');
        $.get("/requires/updateStatus",{id:dataId,status:3},function(data){
            console.log(data);
            if(data.protocol41){
                layer.msg('受理订单成功！', {icon: 6, time: 4000,});
                window.location.href='/myCenter.html';
            }
        })
    });
    $("a[name=changeStatus-success]").click(function(){
        var dataId = $(this).attr('data-id');
        $.get("/requires/updateStatus",{id:dataId,status:4},function(data){
            console.log(data);
            if(data.protocol41){
                layer.msg('受理订单成功！', {icon: 6, time: 4000,});
                window.location.href='/myCenter.html';
            }
        })
    })
}

//评价
function accessCon(){
    $("a[data-name=access]").click(function(){
        orderId = $(this).attr('data-id');
    })
}

//查看评价详情
function sawass(){
    $("a[data-name=seeAccess]").click(function(){
        var assId = $(this).attr('data-id');
        $.get("/order/accessSelect",{req_id:assId},function(data){
            console.log(data);
            if(data.length!=0){
                $("#detail").text(data[0].content);
            }else{
                $("#detail").text('客户暂未评价！');
            }
        },'json')
    })
}

$("#submitAccess").click(function(){
    var content = $("textarea[name=access]").val();
    $.get("/order/assess",{user_id:userId,content:content,req_id:orderId},function(data){
        if(data.protocol41){
            layer.msg("评价成功！",{icon:1,time: 4000});
            $("button[data-dismiss=modal]").trigger('click');
        }
    },'json')
})

$(document.body).fadeIn();