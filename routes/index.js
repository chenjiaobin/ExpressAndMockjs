var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express i like you' });
});
router.get('/mockjs',function(req,res,next){
  var Mock=require('mockjs');
  var data=Mock.mock({
     'list|1-10':[{
       'id|+1':1
     }]
  });
   var ret=JSON.stringify(data,null,4);
	console.log(ret);
  res.render('index',{title:ret});//这个输出的json是放在html结构里面的
})

router.get('/mockapi',function(req,res,next){
	var Mock=require('mockjs');
	var data=Mock.mock({
	    'list|1-10':[{
	       'id|+1':1
	    }]
	});
	var ret=JSON.stringify(data,null,4);
	res.send(ret);//这个输出的值是纯json字符串，更后端返回的数据是一样的
})
module.exports = router;
