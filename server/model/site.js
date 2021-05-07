const mongoose = require('mongoose')

const site = mongoose.model('site',new mongoose.Schema({
    mac:{
        type: String
    },
    name:{
        type: String
    },
    chineseName:{
        type: String
    },
    location:{
        type:String
    },
    lat:{
        type: Number
    },
    lng:{
        type:Number
    },
    created_at:{
        type:String
    },
    image:{
        type: String
    },
    accNum:{
        type: Number
    },
    accInfo:{
        type: Array
    },
    dmeterInfo:{
        type:Array
    },
    dmeterNum:{
        type:Number
    }
}),'site')

module.exports = site
