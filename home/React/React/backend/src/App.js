import React, { useState,useEffect } from "react"
import AddTask from "./pages/AddTask"
import ToDoList from "./pages/ToDoList"
import axios from 'axios'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom' 

const App = () => {
  const [tasks,setTasks] = useState([])
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<AddTask tasks= {tasks} setTasks={setTasks}></AddTask>}>
        </Route>
        <Route exact path="/toDoList" element={<ToDoList tasks= {tasks} setTasks={setTasks} />}>          
        </Route>
      </Routes>
    </Router>
  );
}

export default App
