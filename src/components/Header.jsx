import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='text-center'>
            <Link className="mx-3" to="home">Home</Link>
            <Link className="mx-3" to="about">about</Link>
            <Link className="mx-3" to="contact">contact</Link>
            <Link className="mx-3" to="todo-list">todo</Link>
            <Link className="mx-3" to="users">Users</Link>
        </div>
    )
}

export default Header