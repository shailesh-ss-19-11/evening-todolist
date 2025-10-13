import { useEffect, useState } from "react";
import { MdDelete, MdEditSquare } from "react-icons/md";

const Todo = () => {
    console.log("inside component");
    const [input, setinput] = useState("");
    const [todoList, settodoList] = useState([]);

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

    console.log(todoList)

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
        if(todoListData?.length>0){
            settodoList(todoListData)
        }else{
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
        console.log(filteredTodoList, "filteredTodoList")
        settodoList(filteredTodoList);
    }

    return (
        <div className="container">
            {console.log("inside UI")}
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
                                            <button className="btn m-1 btn-sm btn-primary" ><MdEditSquare /></button>
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
        </div>
    )
}

export default Todo;