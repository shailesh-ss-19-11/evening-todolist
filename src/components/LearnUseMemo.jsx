import React, { useId, useMemo, useRef, useState } from 'react'


// usememo /////////////////
// usememo is react hook which is use for prevent rerendering or re - execute of statements or functions 
// usememo use for prevent expensive calculation calculations 

const LearnUseMemo = () => {
    const id = useId();
    console.log(id)
    const [count, setCount] = useState(1);
    const [dark, setDark] = useState(false);
    const myText = useRef(null);

    const doubleNumber = useMemo(() => {
        // console.log("Calculating....");
        for (let i = 0; i < 1000; i++) {
            // console.log(i);
        }  ///heavy calculation
        return count * 2
    }, [count])


    // console.log(myText);
    const changeBelowText = () => {
        myText.current.textContent = "thanks for change the text";
        document.getElementById("para").textContent = "Thanks for change the text"
    }

    return (
        <div className='text-center' style={dark ? { background: "dark", color: "white" } : { background: "white", color: "black" }}>
            <h2>Usememo Example</h2>
            <input type="number" value={count} onChange={(e) => setCount(+e.target.value)} />

            <button onClick={() => setDark(!dark)}>Toggle Theme</button>

            <br /><br />

            <p>Double Number : {doubleNumber}</p>
            <br />
            <button onClick={changeBelowText}>Change Text</button>
            <p ref={myText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, harum!</p>
            <p id={"para"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, harum!</p>
        </div>
    )
}

export default LearnUseMemo