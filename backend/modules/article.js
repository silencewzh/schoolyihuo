var mongoose = require('mongoose')
var ArticleSchema = require('../schemas/article') //拿到导出的数据集模块
var Article = mongoose.model('Users', ArticleSchema) // 编译生成Movie 模型
 
 module.exports = Article