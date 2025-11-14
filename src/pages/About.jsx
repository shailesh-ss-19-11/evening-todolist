import React from 'react'
import Layout from '../layout/Layout'
import { Route, Routes } from 'react-router-dom'
import User from './User'
import Sales from './Sales'
import Products from './Products'
import Attendance from './Attendance'

const About = () => {
  return (
    <>
      <Routes>
        <Route path='/about' element={<Layout />} >
          <Route path='user' element={<User />} />
          <Route path='sales' element={<Sales />} />
          <Route path='products' element={<Products />} />
          <Route path='attendance' element={<Attendance />} />
        </Route>
      </Routes>
    </>
  )
}

export default About