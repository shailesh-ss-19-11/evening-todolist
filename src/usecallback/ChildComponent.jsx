import React, { useState } from 'react'

const ChildComponent = React.memo(({ handleValueChange }) => {
    console.log("child rendered");

    for (let i = 0; i < 1000; i++) {
        console.log(i);
    }

    return (
        <div>
            <h1>ChildComponent</h1>
            <input type="text" onChange={(e) => handleValueChange(e.target.value)} />
        </div>
    )
})

export default ChildComponent