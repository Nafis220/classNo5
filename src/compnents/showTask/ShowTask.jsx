import React, { useState } from 'react';

function ShowTask({tasks,taskCompleted}) {
    
    
    return (
        <div>
            {tasks.length > 0 ? (<ul>
                {
                    tasks.map((task) => <li> <input onClick={() =>{taskCompleted(task)} } type="radio"/> <label  htmlFor="Task">{task.text}</label> </li>)
                }

                </ul>) : ( <p>No tasks found</p> )}
        </div>
    );
}

export default ShowTask;