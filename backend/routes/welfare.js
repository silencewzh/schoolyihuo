var express = require('express');
var router = express.Router();
var Article=require('../modules/article');


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


//列出文章
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

module.exports = router;
