import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { MdDelete, MdEditSquare } from "react-icons/md";

const Todo = () => {
    const [input, setinput] = useState("");
    const [todoList, settodoList] = useState([]);
    const [showModal, setshowModal] = useState(false);
    const [task, settask] = useState({});
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

    return (
        <div className="container">
            <center>
                <h1>TODO List</h1>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Enter taskName" value={input} onChange={handleInputChange} onKeyDown={handleInputKeyDown} />
                </div>

                <button onClick={addTodo} className="btn btn-sm btn-primary">Add</button>
                <hr />
                <table className="table mt-4">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Task Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todoList?.length > 0 ?
                            todoList?.map((task) => {
                                return (
                                    <tr>
                                        <td>{task.id}</td>
                                        <td>{task.taskName}</td>
                                        <td>
                                            <button className="btn m-1 btn-sm btn-primary" onClick={() => { settask(task); setshowModal(true) }}><MdEditSquare /></button>
                                            <button className="btn m-1 btn-sm btn-danger" onClick={() => handleDeleteTask(task.id)}><MdDelete /></button>
                                        </td>
                                    </tr>
                                )
                            }) :
                            <tr>
                                <td><p>No data found</p></td>
                            </tr>
                        }
                    </tbody>
                </table>
            </center>
            {/* conditional rendering  */}
            {/* {showModal ? <h1>showmodal</h1> : null}
            {showModal ? <button onClick={() => { setshowModal(false) }}>close Modal</button> : null} */}
            <Modal
                onHide={() => setshowModal(false)}
                show={showModal}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit Task
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" defaultValue={task?.taskName} onChange={handleEditTask} />
                    </div>
                    <div>
                        <button className="btn btn-sm btn-primary" onClick={updateTask}>Submit</button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Todo;