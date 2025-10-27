import { useEffect, useState } from "react";

import EditTodo from "./EditTodo";
import TodoTable from "./TodoTable";

const Todo = () => {
    const [input, setinput] = useState("");
    const [todoList, settodoList] = useState([]);
    const [showModal, setshowModal] = useState(false);
    const [task, settask] = useState({});
    const [selectAll, setselectAll] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsperpage = 3;

    // 50 ---> 10 items in single page  10/50
    // 5 pages 
    // 1st page -> 1-10 --> 10*1 ->10
    // 2nd page -> 11-20 --> 10*2 ->20       20-10 -->10
    // 3rd page -> 21-30
    // 4th page -> 31-40
    // 5th page -> 41-50

    const indexOfLastItem = currentPage * itemsperpage;
    const indexOfFirstItem = indexOfLastItem - itemsperpage;
    const currentitems = todoList.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(todoList.length / itemsperpage) //-->5

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
        } else {
            localStorage.setItem("todoList", JSON.stringify([]));
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

    const handleSelect = (e, id) => {
        const existingTodoList = [...todoList];
        const newTodoList = existingTodoList.map((task) => {
            if (task.id === id) {
                return { ...task, isChecked: e.target.checked };
            }
            return { ...task };
        })
        settodoList(newTodoList);
    }


    // console.log(selectAll);
    const removeSelected = () => {
        const existingTodo = [...todoList];
        const updatedList = existingTodo.filter((item) => item.isChecked !== true);
        console.log(updatedList)
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
                <button onClick={removeSelected} className="btn btn-sm btn-primary mx-1">Remove Selected</button>
                <hr />
                <TodoTable
                    // todoList={todoList}
                    todoList={currentitems}
                    settask={settask}
                    setshowModal={setshowModal}
                    handleDeleteTask={handleDeleteTask}
                    selectAll={selectAll}
                    handleSelectAll={handleSelectAll}
                    handleSelect={handleSelect}
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
                /> :
                null}

            <div className="text-center mx-3">
                {
                    [...Array(totalPages)].map((item, index) => {
                        return (
                            <button className={currentPage !== index + 1 ? "btn btn-sm btn-primary mx-1" : "btn btn-sm btn-secondary mx-1 p-2 border border-light"}
                                onClick={() => setCurrentPage(index + 1)}>
                                {index + 1}
                            </button>
                        )
                    })

                }
            </div>
        </div>
    )
}

export default Todo;