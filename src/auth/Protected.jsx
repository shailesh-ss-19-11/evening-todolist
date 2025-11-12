import React from 'react'
import { Navigate } from 'react-router-dom';

const Protected = ({ children }) => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    console.log(userData);

    if (userData && userData?.accessToken && userData?.refreshToken) {
        return children;
    } else {
        return <Navigate to={"/login"} />
    }
}

export default Protected