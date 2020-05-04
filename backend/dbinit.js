/**
 * 初始化数据库添加样例数据
 */

var mongoose=require('mongoose');
var Users = require('../backend/modules/users');
var Goods=require('../backend/modules/goods');
var Knowledge=require('../backend/modules/knowledge')
var Article=require('../backend/modules/article')
mongoose.connect('mongodb://localhost/yihuo');//连接本地数据库

//仅为用户样例测试数据，可后期增加
var user1=new Users({
  name:'wzh',//昵称
  sex:'male',//性别
  id:'a',//账号
  email:'1234567@qq.com',//邮箱
  password:'a',//密码
  cart:[],//购物车书目列表
  buyHistory:[],//购买书历史
  points:0,//用户积分
  status:'已认证',//认证状态
})
user1.save(function(err){
  if(err){console.log(err);}
  else{console.log('user1');}
})

//仅为物品样例测试数据，可后期增加
var goods1=new Goods({
  tag:'书籍',//分类
  name:'活着',//东西名称
  price:10,//价格
  brief:'九成新小说',//简介
  details:'低价出二手小说，基本全新，可以面交',//详情
  image:"hz.jpg" ,
  counts:1,//数量
})
goods1.save(function(err){
  if(err){console.log(err);}
  else{console.log('goods1');}
})

var article1=new Article({
  id:'welfare',//welfare or knowledge
  tittle:'志愿者招募 || 第七届军运会志愿者招募详情',
  content:'此处为详细内容……',
})
article1.save(function(err){
  if(err){console.log(err);}
  else{console.log('article1');}
})

var article2=new Article({
  id:'knowledge',//welfare or knowledge
  tittle:'分享 || 思政课复习技巧分享',
  content:'此处为详细内容……',
})
article2.save(function(err){
  if(err){console.log(err);}
  else{console.log('article2');}
})

var knowledge1=new Knowledge({
  userId:'wzh',//用户账号
  money:5,
  brief:'帮忙取打印的高数复习题',
})
knowledge1.save(function(err){
  if(err){console.log(err);}
  else{console.log('knowledge1');}
})
