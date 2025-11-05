import React, { useMemo, useState } from 'react'


// usememo /////////////////
// usememo is react hook which is use for prevent rerendering or re - execute of statements or functions 
// usememo use for prevent expensive calculation calculations 

const LearnUseMemo = () => {
    const [count, setCount] = useState(1);
    const [dark, setDark] = useState(false);

    
    const doubleNumber  = useMemo(() => {
        console.log("Calculating....");
        for (let i = 0; i < 1000; i++) {
            console.log(i);
        }  ///heavy calculation
        return count * 2
    },[count])

    return (
        <div className='text-center' style={dark ? { background: "dark", color: "white" } : { background: "white", color: "black" }}>
            <h2>Usememo Example</h2>
            <input type="number" value={count} onChange={(e) => setCount(+e.target.value)} />

            <button onClick={() => setDark(!dark)}>Toggle Theme</button>

            <br /><br />

            <p>Double Number : {doubleNumber}</p>
        </div>
    )
}

export default LearnUseMemo