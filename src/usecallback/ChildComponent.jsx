import React, { useState } from 'react'

const ChildComponent = React.memo(() => {
    console.log("child rendered");
    const [input, setinput] = useState("")

    for (let i = 0; i < 1000; i++) {
        console.log(i);
    }

    return (
        <div>
            <h1>ChildComponent</h1>
            <input type="text" onChange={(e) => setinput(e.target.value)} />
        </div>
    )
})

export default ChildComponent