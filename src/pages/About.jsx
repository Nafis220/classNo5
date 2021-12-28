import React, { useState } from 'react';
import Button from '../compnents/button/Button';
import DisplayCount from '../compnents/displayCount/dispalyCount';
import HandleIncrementDecrement from '../compnents/handleIncrementDecrement/HandleIncrementDrement';
import Layout from '../compnents/layout/Layout';

function About(props) {
    const [count, setCount] = useState(0);
    const [incrementInput,setIncrementInput] = useState(10);
    const [decrementInput, setDecrementInput] = useState(5);
 
    const increment = () => {
     setCount(count+incrementInput)
    };

    const decrement = () => {
        setCount(count-decrementInput)
       }

    const handleIncrement = (e) => {
       setIncrementInput(parseInt(e.target.value))
    };
    const handleDecrement = (e) => {
      setDecrementInput(e.target.value)
    };

    return (
        <Layout>
            <h2>I am about page</h2>
                <DisplayCount count= {count} />
                <Button increment = {increment} decrement = {decrement} />
                <HandleIncrementDecrement handleIncrement={handleIncrement} handleDecrement={handleDecrement}/>
        </Layout>
    );
}

export default About;