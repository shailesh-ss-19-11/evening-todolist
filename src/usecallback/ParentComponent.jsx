import React, { useCallback, useState } from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    const [count, setcount] = useState(0);
    const [input, setinput] = useState("");

    const handleValueChange = useCallback((value) => {
        setinput(value)
    },[input])

    return (
        <div>
            <h5>count : {count}</h5>
            <h1>parent component</h1>
            <button onClick={() => setcount(count + 1)}>Increase</button>
            <br /><br />
            <ChildComponent handleValueChange={handleValueChange} />
            <p>{input}</p>
        </div>
    )
}

export default ParentComponent