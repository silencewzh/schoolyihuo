var mongoose = require('mongoose');

//声明对象
var KnowledgeSchema=new mongoose.Schema({
  userId:String,//用户账号
  money:Number,
  brief:String,
})

KnowledgeSchema.statics={
  //根据Id查找
  findById:function(id,callback){
    return this.find({userId:id},callback)
  },
  //列出所有
  listAll:function(callback){
    return this.find().sort().exec(callback);
  },

}

module.exports=KnowledgeSchema