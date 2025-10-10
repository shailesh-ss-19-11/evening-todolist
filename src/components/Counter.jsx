import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);
    const [inputValue, setinputValue] = useState(0);
    // let count = 0;
    // const handleIncrement = () => {
    //     count++;
    //     console.log(count,"inside")
    // }

    const handleIncrement = (value) => {
        console.log(value)

        // setCount(count + value);
        setCount(count + inputValue);
    }

    const handleDecrement = (value) => {
        if (count < 1) {
            setCount(0);
        }else{
            // setCount(count - value);
            setCount(count - inputValue);
        }
    }

    const handleInputChange = (event)=>{
        setinputValue(+event.target.value);
    }


    return (
        <center>
            <h1>Counter App</h1>
            <input type="number" onChange={handleInputChange}/><br /><br />

            <button onClick={() => handleIncrement(5)}>+</button>
            <p>{count}</p>
            <button onClick={() => handleDecrement(10)}>-</button>
        </center>
    )
}

export default Counter