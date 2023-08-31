import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
const TaskComponent = (props) => {
  return (
    <div>
      <br/>
    <div className='row' style={{border:'solid'}}>
        <div>
            <center>
            <div>
              <label>Task number: {props.id}</label>                        
            </div>
            <div>
                      <label>Task Details: {props.task}</label> 
            </div>
            </center>
            

        </div>
    </div>
    </div>
  )
}

export default TaskComponent