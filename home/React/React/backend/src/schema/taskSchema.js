const mongoose = require('mongoose')
const taskSchema = new mongoose.Schema({
    id:Number,
    details:String
})
const taskTable = new mongoose.model('Tasks',taskSchema)
module.exports = taskTable;