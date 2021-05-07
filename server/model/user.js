const mongoose = require('mongoose')
const site = require('./site')

const user = mongoose.model('user',new mongoose.Schema({
    id:{
        type:String
    },
    password:{
        type:String
    },
    role:{
        type:String
    },
    site:[{
        type: mongoose.Types.ObjectId,
        ref:site
    }]
}),'user')

module.exports = user
