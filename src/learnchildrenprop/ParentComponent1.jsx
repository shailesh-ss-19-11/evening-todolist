import React, { useState } from 'react'
import ChildComponent1 from './ChildComponent1';

const ParentComponent1 = (props) => {

    const { children } = props;
    const [count, setcount] = useState(0);
    return (
        <div className='text-center'>
            <h1>ParentComponent 1</h1>
            <h3>Count : {count}</h3>
            <button onClick={() => setcount(count + 1)}>+</button>
            {children}
        </div>
    )
}

export default ParentComponent1