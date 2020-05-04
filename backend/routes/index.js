var express = require('express');
var router = express.Router();
var Goods=require('../modules/goods')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/findByName',function(req,res,next){
  console.log('findByName');
  console.log(req.body);
  console.log(typeof(req.body.name));
  Goods.findByName(req.body.name, function(err, results){
    if(err){
      console.log(err);
      res.send('数据库出问题了');
    }
    else{
      console.log(results);
      if (results.length === 0){
        res.send('物品不存在');
      }else{
        res.json(results);
      }
    }
  })
});

router.post('/findByTag',function(req,res,next){
  console.log(req.body.tag);
  Goods.findByTag(req.body.tag, function(err, results){
    if(err){
      console.log(err);
      res.send('数据库出问题了');
    }
    else{
      console.log(results);
      if (results.length === 0){
        res.send('物品不存在');
      }else{
        res.json(results);
      }
    }
  })
});

router.post('/updateCount',function(req,res,next){
  console.log('updateCount');
  console.log(req.body);
  console.log(typeof(req.body.name));
  Goods.findByName(req.body.name,req.body.counts, function(err, results){
    if(err){
      console.log(err);
      res.send('数据库出问题了');
    }
    else{
      console.log(results);
      res.send(true);
    }
  })
});

router.post('/deleteByName',function(req,res,next){
  console.log('deleteByName');
  console.log(req.body);
  console.log(typeof(req.body.name));
  Goods.findByName(req.body.name, function(err, results){
    if(err){
      console.log(err);
      res.send('数据库出问题了');
    }
    else{
      console.log(results);
      res.send(true);
    }
  })
});

module.exports = router;
