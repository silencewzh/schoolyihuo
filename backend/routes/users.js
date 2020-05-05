var express = require('express');
var router = express.Router();
var Users=require('../modules/users')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



router.post('/register',function(req,res,next){
  console.log('register');
  console.log(req.body);
  console.log(typeof(req.body.id));
  Users.distinctById(req.body.id, function(err, results){
    if(err){
      console.log(err);
      res.send('数据库出问题了');
    }
    else{
      console.log(results);
      if (results.length === 0){
        let user=new Users;
        user.id=req.body.id;
        user.password=req.body.password;
        user.save(function(err){
          if(err){
            console.log(err);
            res.send('create defeat')
          }
          else{res.send('create successfully');}
        });
      }else{
        res.send('该id已存在')
      }
    }
  })
});

router.post('/login',function(req,res,next){
  Users.findById(req.body.id, function(err, results){
    if(err){
      console.log(err);
      res.send(err);
    }
    else{
      console.log(results);
      if (!results){
        res.send('该用户不存在')
      }else{
        console.log(req.body.password);
        console.log(results.password)
        if(req.body.password === results.password){
          res.send(true)
        }else{
          res.send('密码错误')
        }
      }
    }
  })
});

router.post('/getUserInfo', function(req,res,next) {
  Users.getUserInfo(req.body.id, function(err, result){
    if (!err) {
      console.log(result);
      res.json(result);
    } else {
      console.log(err);
      res.send(err);
    }
  })
});
router.post('/refreshUserInfo',function(req,res,next){
  Users.refreshUserInfo(req.body.id, req.body.name, req.body.sex, function(err, rawResponse){
    if (!err) {
      console.log(rawResponse);
      res.send(true);
    } else {
      res.send(err);
    }
  })
});

router.post('/resetPassword',function(req,res,next){
  Users.resetPassword(req.body.id,req.body.oldPassword, req.body.newPassword,function(err, rawResponse){
    if(err){
      res.send(err)
    }else{
      res.send(rawResponse.nModified.toString());
    }
  })
});

router.post('/resetEmail',function(req,res,next){
  Users.resetEmail(req.body.id, req.body.password, req.body.oldEmail, req.body.newEmail,function(err, rawResponse){
    if(err){
      res.send(err)
    }else{
      res.send(rawResponse.nModified.toString());
    }
  })
});



router.post('/getShoppingCart',function(req,res,next){
  Users.findById(req.body.id,function(err, result){
    if(err){
      res.send(err)
    }else{
      res.json(result.cart);
    }
  })
});

router.post('/refreshShoppingCart',function(req,res,next){
  Users.updateShoppingCart(req.body.id,req.body.cart,function(err, result){
    if(err){
      res.send(false);
      res.send(err);
    }else{
      res.send(true);
    }
  })
});
router.post('/addToShoppingCart', function(req, res, next) {
  console.log(req.body.id)
  console.log(req.body.book)
  Users.addToShoppingCart(req.body.id,req.body.book, function(err, result){
    if(err){
      res.send(err)
    }else{
      res.send(true)
    }
  })
});

router.post('/getPoints',function(req,res,next){
  console.log(req.body.id)
  Users.findById(req.body.id,function(err, result){
    if(err){
      res.send(err)
    }else{
      res.send(result.points.toString())
    }
  })
});

//修改积分
router.post('/updatePoints',function(req,res,next){
  console.log(req.body.points)
  Users.updatePoints(req.body.id,req.body.points,function(err,result){
    if(err){
      res.send(err)
    }else{
      res.send(true);
    }
  })
});

//后台修改认证状态
router.post('/updateStatus',function(req,res,next){
  console.log(req.body.status)
  Users.updatePoints(req.body.id,req.body.status,function(err,result){
    if(err){
      res.send(err)
    }else{
      res.send(true);
    }
  })
});

router.post('/getHistory',function(req,res,next){
  Users.findById(req.body.id,function(err, result){
    if(err){
      res.send(err);
    }else{
      res.send(result.buyHistory);
    }
  })
});

router.post('/addToHistory', function(req, res, next) {
  console.log(req.body.id)
  console.log(req.body.book)
  Users.addToHistory(req.body.id,req.body.book, function(err, result){
    if(err){
      res.send(err)
    }else{
      res.send(true)
    }
  })
});


module.exports = router;

