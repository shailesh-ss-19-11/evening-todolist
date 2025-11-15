import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import User from './User'
import Sales from './Sales'
import Products from './Products'
import Attendance from './Attendance'

const About = () => {
  return (
    <>
      <div className='d-flex gap-3'>
        <Link to={"userinfo"}>UserInfo</Link>
        <Link to={"products"}>Product</Link>
        <Link to={"team"}>Team</Link>
        <Link to={"portfolio"}>Portfolio</Link>
      </div>
      <Outlet/>
    </>
  )
}

export default About