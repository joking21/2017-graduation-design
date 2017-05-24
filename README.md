# express_hbs_bootstrap
express+hbs+bootstrap
#   第一个坑
在router中,如果要发送文件(sendFile).需要重新配置路径
var p = path.join(__dirname, '../public')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'joking' });
});
router.get('/a', function(req, res, next) {
    res.sendFile(p+'/a.html');
});
#  第二个坑
vuejs的{{}}表达式和hbs的表达式冲突
第一种解决方案(失败):
new Vue({
  delimiters: ['${', '}']
})
在node环境中即使配置了delimiters也无效
第二种解决方案(成功):
把hbs模板转义输出 \{{}}
<!--<div id="app">
    <h1>{{title}}</h1>
    <span>\{{a}}</span>
    <p  @click="b">Welcome \{{sd}} to {{title}}</p>
</div>
  --> 
