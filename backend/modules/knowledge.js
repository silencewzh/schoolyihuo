var mongoose = require('mongoose')
var KnowledgeSchema = require('../schemas/knowledge') //拿到导出的数据集模块
var Knowledge = mongoose.model('Users', KnowledgeSchema) // 编译生成Movie 模型
 
 module.exports = Knowledge