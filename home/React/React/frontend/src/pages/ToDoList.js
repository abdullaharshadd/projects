import React,{useEffect, useState} from "react";
import axios from 'axios'
import TaskComponent from "../component/TaskComponent";
const ToDoList = (props) =>{
    useEffect (()=>{
        axios.get('http://localhost:5000/Tasks/getTasks')
        .then((res)=>{
            const list = res.data
            props.setTasks(list)
        })
        
    },[])
    return(       
            <div className="row">
                <center><h2>TO-DO LIST</h2></center>
                
            {props.tasks.map((task,index)=>{
                
                return <TaskComponent task={task.details} id={task.id}/>
                 
            })}
            </div>
        
    )
}
export default ToDoList