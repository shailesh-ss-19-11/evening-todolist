import React from 'react'
import { MdDelete, MdEditSquare } from "react-icons/md";
const TodoTable = (props) => {
    const { todoList, settask, setshowModal, handleDeleteTask, selectAll,handleSelectAll } = props;
    return (
        <div>
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
                        </th>
                        <th>#</th>
                        <th>Task Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {todoList?.length > 0 ?
                        todoList?.map((task) => {
                            return (
                                <tr key={task.id}>
                                    <td><input type="checkbox" checked={task.isChecked} /></td>
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
        </div>
    )
}

export default TodoTable