var express = require('express');
var router = express.Router();
var Article=require('../modules/article');
var Knowledge=require('../modules/knowledge')


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//获得分享文章
router.post('/findArticleById',function(req,res,next){
  console.log('findArticleById');
  console.log(req.body);
  console.log(typeof(req.body.id));
  Article.findById(req.body.id, function(err, results){
    if(err){
      console.log(err);
      res.send('数据库出问题了');
    }
    else{
      console.log(results);
      if (results.length === 0){
        res.send('文章不存在');
      }else{
        res.json(results);
      }
    }
  })
});
//添加问题
router.post('/addQuetion',function(req,res,next){
  console.log('addQuetion');
  console.log(req.body);
  console.log(typeof(req.body.userId));
  let knowledge=new Knowledge;
  knowledge.userId=req.body.userId;
  knowledge.money=req.body.money;
  knowledge.brief=req.body.brief;
  knowledge.save(function(err){
    if(err){
      console.log(err);
      res.send('create defeat')
    }
    else{res.send('create successfully');}
  });
});





module.exports = router;
