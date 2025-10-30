import React from 'react'
import { MdDelete, MdEditSquare } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const UserTable = (props) => {
    const { userData, deleteUser } = props;
    const navigate = useNavigate();
    return (
        <>
            <button className='btn btn-sm btn-secondary' onClick={() => navigate("add-user")}>Add</button>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>phone</th>
                        <th>job title</th>
                        <th>company name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.length > 0 ?
                        userData.map((user) => {
                            return (
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user["job title"]}</td>
                                    <td>{user["company name"]}</td>
                                    <td>
                                        <button className="btn m-1 btn-sm btn-primary" onClick={() => navigate("/users/edit-user/" + user.id)}><MdEditSquare /></button>
                                        <button className="btn m-1 btn-sm btn-danger" onClick={() => deleteUser(user.id)}><MdDelete /></button>
                                    </td>
                                </tr>
                            )
                        })
                        : <tr>
                            <td>No data found</td>
                        </tr>
                    }
                </tbody>
            </table>
        </>
    )
}

export default UserTable