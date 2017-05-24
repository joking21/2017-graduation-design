/**
 * Created by joking on 2017/3/21.
 */

//$[]替换
function replaceElementInnerText(ele, data) {
    var $ele,innerHTML;
    if(typeof ele == 'string'){
        $ele=$(ele);
        innerHTML=$ele.html();
    }else{
        $ele=(ele instanceof jQuery)?ele:$(ele);
        innerHTML=$ele.html();
    }
    var pattern=/\$\[(\w+\.*\w*)]/g;
    var replace_attr=[];
    var i=0;
    while(i++<100) {
        var result = pattern.exec(innerHTML);
        if (!result) {
            break;
        }
        replace_attr.push(result[1]);
    }

    for(var key in replace_attr){
        var replace=new RegExp('\\$\\['+replace_attr[key]+'\\]','g');
        if(replace_attr[key].indexOf(".")>0){
            var replace_attr_keys=replace_attr[key].split(".");
            var replace_attr_str="data";
            if(!data[replace_attr_keys[0]]||typeof data[replace_attr_keys[0]]!=='object'){
                continue;
            }
            for(var _key in replace_attr_keys){
                replace_attr_str+='[\''+replace_attr_keys[_key]+'\']';
            }
            if(eval(replace_attr_str)!=null){
                innerHTML=innerHTML.replace(replace,eval(replace_attr_str));
            }
        }else{
            if(data[replace_attr[key]]!=null){
                innerHTML=innerHTML.replace(replace,data[replace_attr[key]]);
            }
        }
    }
    $ele[0].innerHTML=innerHTML;
    $ele.find('img[img-load="load"]').each(function () {
        var reg=new RegExp("(http|ftp|https):\/\/w*");
        if(reg.exec($(this).attr('_src'))){
            $(this).attr("src",$(this).attr('_src'));
        }
    });
    return $ele[0].outerHTML;
}

//时间转换
function formatTimeToStr(fmt){
    var d = new  Date(fmt);
    var year = check(d.getFullYear());
    var month = check(d.getMonth()+1);
    var date = check(d.getDate());
    var hour = check(d.getHours());
    var minute = check(d.getMinutes());
    var second = check(d.getSeconds());
    return  year+"-"+month+"-"+date+"   "+hour+":"+minute+":"+second;
}
function check(i){
    var j ;
    if(i<10){
        j = "0"+i;
    }else{
        j = i;
    }
    return j ;
}

//获取浏览器传值
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}