import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './pages/User';
import Sales from './pages/Sales';
import Products from './pages/Products';
import Attendance from './pages/Attendance';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

// 11-10-2025
// useEffect flow
// step by step execution of component

// 12-10-2025 -sunday

// 13-10-2025
// useEffect execution
// dependancy in useEffect
// componentwill unmount
// optional chaining

//  15-10-2025
//  react bootstrap modal
//  edit functionality of form
//  prefill data in form

//  16-10-2025
// select row in table
// multiple select
// select all

//  17-10-2025
//  pagination in react table

//  27-10-2025
//  react router dom
// introduction of api

//  25-10-2025
//  protected routing 