const express = require('express')
const path = require("path")
const app = express()

const mongoose = require('mongoose')
const mongoConfig = require('./config/mongoConfig')

const userService = require('./service/user')

app.use(require('cors')())
app.use(express.json())
app.use(express.static(path.join(__dirname,'dist')))

mongoose.connect(mongoConfig.DB,{
    useCreateIndex:true,
    useFindAndModify:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})

app.use('/api',userService)

app.listen(3001,()=>{
    console.log("http://localhost:3001/")
})
