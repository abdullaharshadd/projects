const express = require('express')
const app= express()
const cors = require('cors')
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/ToDOList',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
const taskRouter = require('./routes/tasks')
app.use('/Tasks',taskRouter);
app.listen(5000,()=>{
    console.log("Server is running on port: 5000")
})