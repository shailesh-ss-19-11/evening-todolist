import React from 'react'

const ChildComponent1 = (props) => {
    const { name } = props;
    console.log("child component render....");
    return (
        <div>ChildComponent1 {name}</div>
    )
}

export default ChildComponent1