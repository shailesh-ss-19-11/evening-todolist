import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from './Sidebar'

const Layout = () => {
    return (
        <div className='container'>
            <div className='d-flex  bg-light justify-content-center align-items-start mt-1' style={{ height: "90vh" }}>
                <div className='w-25'>
                    <Sidebar />
                </div>
                <div className='w-100'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout