const express = require('express')
const router = express.Router()
const user = require('../model/user')

//add user
router.post('/user/add',async (req, res) => {
    const users = await user.create(req.body)
    res.send(users)
})

//login
router.get('/user/get/:id',async (req, res) => {
    const users = await user.findOne({id:req.params.id})
    res.send(users)
})

//add site to userInfo
router.post('/user/addSite',async (req, res) => {
    const users = await user.findOneAndUpdate({id:req.body[1]},{$push:{site:req.body[0]}})
    res.send(users)
})

//delete site from userInfo
router.post('/user/deleteSite',async (req, res) => {
    const users = await user.findOneAndUpdate({id:req.body[1]},{$pull:{site:req.body[0]}})
    res.send(users)
})

module.exports = router
