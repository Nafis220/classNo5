import React, { useState } from 'react';
import Layout from '../../compnents/layout/Layout';
import CreateTask from '../../compnents/todoList/CreateTask';
import shortId from 'shortid';
import ShowTask from '../../compnents/showTask/ShowTask';
 import DueTask from './DueTask/DueTask';

function Task(props) {
    const [tasks,setTasks] = useState([]);
    const [visibility, setVisibility] = ('all');
     const [dueTask, setDueTask] = useState([])

    const addNewTask = (text) =>{
        const task = {
            text,
            isCompleted: false,
            createdAT : new Date(),
            id: shortId.generate()
        }
        setTasks([task, ...tasks])
    }

    const taskCompleted = (text) =>{
         setDueTask([text, ...dueTask])
          
          }
    
    return (
        <Layout>
            <h1>Tasks</h1>
            <CreateTask  addNewTask={addNewTask}/>
            <ShowTask tasks ={tasks} taskCompleted={taskCompleted}/>
            <DueTask dueTask ={dueTask} /> 
        </Layout>
    );
}

export default Task;