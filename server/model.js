const mongoose = require('mongoose');
// 链接mongo
const DB_URL = 'mongodb://localhost:27017/chat';
mongoose.connect(DB_URL);
// mongoose.connection.on('connected', function () {
//     console.log('mongodb connecte success')
// })

// 类似于mysql的表 mongo里有文档、字段的概念
// const User = mongoose.model('user', new mongoose.Schema({
//     user:{type:String,require:true},
//     age:{type:Number,require:true}
// }))

const models = {
    user: {
        'user': {type:String, require: true},
        'pwd': {type: String, require: true},
        'type': {type: String, require: true},
        // 头像
        'avatar': {type:String},
        // 个人简介或者职位简介
        'desc': {type: String},
        // 职位名称
        'title': {type: String},
        // 如果你是boss，还有两个字段
        'company': {type: String},
        'money': {type: String}
    },
    chat: {}
}

for (let m in models) {
    mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports ={
    getModel: function(name) {
        return mongoose.model(name)
    }
}