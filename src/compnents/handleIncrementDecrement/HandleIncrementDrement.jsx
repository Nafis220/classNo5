import React from 'react';

function HandleIncrementDecrement({handleIncrement,handleDecrement}) {
    return (
        <div>
            <label >Increment</label>
            <input onChange={handleIncrement}type="number" />
            <label >Decrement</label>
            <input onChange={handleDecrement}type="number" />
        </div>
    );
}

export default HandleIncrementDecrement;