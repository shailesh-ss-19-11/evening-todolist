import { useEffect, useState } from "react";

import EditTodo from "./EditTodo";
import TodoTable from "./TodoTable";

const Todo = () => {
    const [input, setinput] = useState("");
    const [todoList, settodoList] = useState([]);
    const [showModal, setshowModal] = useState(false);
    const [task, settask] = useState({});
    const [selectAll, setselectAll] = useState(false);


    const handleInputChange = (e) => {
        setinput(e.target.value);
    }

    const addTodo = () => {
        if (input !== "") {
            let obj = {
                taskName: input,
                id: new Date().getTime()
            }
            const newTodoList = [...todoList, obj];

            settodoList(newTodoList);
            setinput("");
        } else {
            alert("input cant be blank")
        }
    }


    const handleInputKeyDown = (e) => {
        if (e.key === "Enter") {
            addTodo();
        }
    }

    const addDataInLocalstorage = () => {
        if (todoList?.length > 0) {
            localStorage.setItem("todoList", JSON.stringify(todoList));
        }
    }


    const fetchLocalstorageData = () => {
        const todoListData = JSON.parse(localStorage.getItem("todoList"))
        if (todoListData?.length > 0) {
            settodoList(todoListData)
        } else {
            settodoList([])
        }
    }

    // useEffect is react functional hook which is use for manage the sideeffects of react compontnents 
    // for fetch api data 
    // for call IoAlertSharp, loadings, dependacies 

    useEffect(() => {
        fetchLocalstorageData();
    }, [])



    useEffect(() => {
        addDataInLocalstorage();
    }, [todoList]);


    const handleDeleteTask = (taskId) => {
        const filteredTodoList = todoList.filter((task) => task.id !== taskId);
        settodoList(filteredTodoList);
    }

    console.log(task);

    const handleEditTask = (e) => {
        if (e.target.value !== "") {
            const obj = { ...task, taskName: e.target.value }
            settask(obj);
        }
    }

    const updateTask = () => {
        const existingList = [...todoList];
        console.log(existingList);
        const findedElement = existingList.find((item) => item.id === task.id);
        console.log(findedElement);
        const index = existingList.indexOf(findedElement);
        console.log(index);
        existingList[index] = task;
        settodoList(existingList);
        setshowModal(false);
    }

    const handleSelectAll = (e) => {
        const existingTodoList = [...todoList];
        const newTodoList = existingTodoList.map((task) => {
            return { ...task, isChecked: e.target.checked };
        })
        console.log(newTodoList)
        settodoList(newTodoList);
        setselectAll(e.target.checked);
    }


    // console.log(selectAll);
    const removeSelected = () => {
        const existingTodo = [...todoList];
        const updatedList = existingTodo.filter((item) => item.isChecked !== true);
        settodoList(updatedList);
        setselectAll(false);
    }

    return (
        <div className="container">
            <center>
                <h1>TODO List</h1>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Enter taskName" value={input} onChange={handleInputChange} onKeyDown={handleInputKeyDown} />
                </div>

                <button onClick={addTodo} className="btn btn-sm btn-primary mx-1">Add</button>
                <button onClick={removeSelected} className="btn btn-sm btn-primary mx-1">Remove all</button>
                <hr />
                <TodoTable
                    todoList={todoList}
                    settask={settask}
                    setshowModal={setshowModal}
                    handleDeleteTask={handleDeleteTask}
                    selectAll={selectAll}
                    handleSelectAll={handleSelectAll}
                />
            </center>
            {/* conditional rendering  */}
            {/* {showModal ? <h1>showmodal</h1> : null}
            {showModal ? <button onClick={() => { setshowModal(false) }}>close Modal</button> : null} */}
            {showModal ?
                <EditTodo
                    name={"shailesh"}
                    task={task}
                    handleEditTask={handleEditTask}
                    updateTask={updateTask}
                    showModal={showModal}
                    setshowModal={setshowModal}
                    xyz="kkk"
                /> :
                null}
        </div>
    )
}

export default Todo;