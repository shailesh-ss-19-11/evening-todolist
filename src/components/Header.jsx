import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("userData");
        navigate("/login");
    }
    return (
        <div className='text-center'>
            <Link className="mx-3" to="home">Home</Link>
            <Link className="mx-3" to="about">about</Link>
            <Link className="mx-3" to="contact">contact</Link>
            <Link className="mx-3" to="todo-list">todo</Link>
            <Link className="mx-3" to="users">Users</Link>

            <button onClick={() => navigate("/login")}>Login</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Header