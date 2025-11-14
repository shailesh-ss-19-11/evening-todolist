import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-start'>
            <p><Link to={"/about/user"}>User</Link></p>
            <p><Link to={"/about/products"}>Products</Link></p>
            <p><Link to={"/about/sales"}>Sales</Link></p>
            <p><Link to={"/about/attendance"}>Attendance</Link></p>
        </div>
    )
}

export default Sidebar