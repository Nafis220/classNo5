import React from 'react';

function ShowTask({tasks}) {
    console.log(tasks)
    return (
        <div>
            {tasks.length > 0 ? (<ul>
                {
                    tasks.map((task) => <li id ={task.id}>{task.text}</li> )
                }

            </ul>) : ( <p>No tasks found</p> )}
        </div>
    );
}

export default ShowTask;