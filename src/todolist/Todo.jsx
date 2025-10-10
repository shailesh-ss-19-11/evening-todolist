import { useState } from "react";

const Todo = () => {
    const [input, setinput] = useState("");
    const [todoList, settodoList] = useState([]);
    const handleInputChange = (e) => {
        setinput(e.target.value);
    }

    const addTodo = () => {
        if (input !== "") {
            let obj = {
                taskname: input,
                id: new Date().getTime()
            }
            const newTodoList = [...todoList, obj];
            settodoList(newTodoList);
            setinput("");
        } else {
            alert("input cant be blank")
        }
    }

    return (
        <>
            <center>
                <h1>TODO List</h1>
                <input type="text" value={input} onChange={handleInputChange} />
                <button onClick={addTodo}>Add</button>
            </center>
        </>
    )
}

export default Todo;