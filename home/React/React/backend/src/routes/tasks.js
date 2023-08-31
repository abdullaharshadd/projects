const express = require('express')
var router = express.Router()
const taskTable = require('../schema/taskSchema')
router.get('/getTasks',function(req,res){
    taskTable.find({},(err,tasks)=>{
        if(err)
            res.send(err)
        else
            res.send(tasks)
    })
})
router.post('/addTask',async(req,res)=>{
    const recv_id = req.body.id
    const recv_details = req.body.details
    var newTask = new taskTable({
        id:recv_id,
        details:recv_details
    })
    newTask.save((err,doc)=>{
        if(err)
            res.send("Cannot add task!")
        else
            res.send("Task added!")
    })
})
module.exports=router;