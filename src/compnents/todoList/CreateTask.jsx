import React, { useState } from 'react';

function CreateTask({addNewTask}) {
    const [addTask, setAddTask] = useState('');

    return (
        <div>
            <input type="text"  value = {addTask} onChange={(e) => {setAddTask(e.target.value)}} />
            <button onClick ={ ()  =>{ if(addTask){addNewTask(addTask) ;setAddTask('')} 

            else alert('Add Task')} }>Add Task</button>

        </div>
    );
}

export default CreateTask;