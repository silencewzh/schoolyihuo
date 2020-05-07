var mongoose = require('mongoose');

//声明对象
var ArticleSchema=new mongoose.Schema({
  id:String,//welfare or knowledge
  tittle:String,
  content:String,
})

//文章的方法
ArticleSchema.statics={
  //根据class查找

  //列出所有
  listAll:function(callback){
    return this.find().sort().exec(callback);
  },
  findById:function(id,callback){
    return this.find({id:id},callback)
  }
}

module.exports=ArticleSchema