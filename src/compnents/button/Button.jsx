import React from 'react';

function Button({increment, decrement}) {
    return (
        <div>
            <button onClick={increment} className='btn btn-primary'>Increment</button>
            <button onClick={decrement} className='btn btn-danger'>Decrement</button>
        </div>
    );
}

export default Button;