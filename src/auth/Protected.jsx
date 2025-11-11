import React from 'react'
import { Navigate } from 'react-router-dom';

const Protected = ({ children }) => {
    const localdata = localStorage.getItem("userdata")
    let userData;
    if (localdata) {
        userData = JSON.parse(atob(localdata));
    }
    console.log(userData);
    if (userData && userData.accessToken) {
        return children;
    } else {
        return <Navigate to={"/login"} />
    }

}

export default Protected