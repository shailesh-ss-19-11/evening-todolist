import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    const [count, setcount] = useState(0);
    return (
        <div>
            <h5>count : {count}</h5>
            <h1>parent component</h1>
            <button onClick={() => setcount(count + 1)}>INC</button>
            <br /><br />
            <ChildComponent />
        </div>
    )
}

export default ParentComponent