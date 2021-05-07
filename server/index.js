const express = require('express')
const path = require("path")
const app = express()

app.use(require('cors')())
app.use(express.json())

app.use(express.static(path.join(__dirname,'dist')))

app.listen(3001,()=>{
    console.log("http://localhost:3001/")
})
