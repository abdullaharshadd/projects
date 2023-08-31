import React, { useState } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios'
const AddTask = (props) =>{
    const [details,setDetails] = useState()
    function handleClick(){
        console.log(props.tasks)
        var newarr = props.tasks
        newarr.push(details)
        props.setTasks(newarr)
        var task={
            id: props.tasks.length,
            details:details
        }
        axios.post('http://localhost:5000/Tasks/addTask',task)
        .then(function(res){
            console.log(res.data)
        })
        .catch(function(err){
            console.log(err)
        })
    }
    return(
            <div className="row">
                <div>
                    <input id='addDetails' value={details} type='text' placeholder="Add Task Details"  onChange={(e)=>{setDetails(e.target.value)}}></input>
                    <div className="row">
                    <br/>
                    <br/>
                    <button onClick={function(){handleClick()}}>Add Task</button>
                    
                    </div>
                    <br/>
                    <br/>
                    
                </div>
                <Link to="/toDoList">
                <button >View List</button>
                </Link>
            </div>
    )
}
export default AddTask
//<Link to='/toDoList'>
//</Link>