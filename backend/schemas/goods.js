var mongoose = require('mongoose');

//声明对象
var GoodsSchema=new mongoose.Schema({
  tag:String,//分类
  name:String,//东西名称
  price:Number,//价格
  brief:String,//简介
  details:String,//详情
  image:String ,//图片
  counts:Number,//数量
})

//物品的方法
GoodsSchema.statics={
  //根据class查找

  //列出所有
  listAll:function(callback){
    return this.find().sort().exec(callback);
  },
  //根据物品id查找
  findById:function(id,callback){
    return this.find({id:id},callback)
  },
  //根据物品名字查找
  findByName:function(name,callback){
    return this.find({name:name},callback)
  },
  //根据物品tag查找
  findByTag:function(tag,callback){
    return this.find({tag:tag},callback)
  },
  //更新物品数量
  updateGoodsCount:function(name,count,callback){
    return this.updateOne({name:name}, {$set:{counts: count}}, callback);
  },
  //删除物品
  deleteByName:function(name,callback){
    return this.deleteOne({name:name},callback);
  }

}

module.exports=GoodsSchema