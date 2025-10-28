import React, { useEffect, useState } from 'react'
import { baseURL } from '../../constant'
import axios from 'axios';

const Users = () => {
    const [userData, setuserData] = useState([]);
    //     axios --libary
    //     add/ create user 
    //     update user 
    //     delete user 
    //     read users 
    //     api calls 
    //     async await 
    //     try catch finally
    //     useEffect 

    // using fetch function 
    // const fetchUserList = () => {
    //     // const a = fetch(baseURL);  // it will return promise
    //     let flag = false
    //     fetch(baseURL).then((result) => {
    //         if (result.status === 200) {
    //             flag = true;
    //         }
    //         return result.json();
    //     }).then((response) => {
    //         if (flag) {
    //             setuserData(response)
    //         }
    //     }).catch((err) => console.log(err)).finally(() => {
    //         flag = false;
    //         // setuserData([])
    //     })
    // }

    // using axios 
    // const fetchUserList = () => {
    //     axios(baseURL)  //promise
    //     .then((response) => {
    //         if(response.status===200){
    //             setuserData(response.data);
    //         }
    //     }).catch((err) => {
    //         console.log(err)
    //         alert(err?.message)
    //     })
    // }

    const fetchUserList = async () => {
        try {
            const response = await axios(baseURL)  //promise
            console.log(response)
            if (response.status === 200) {
                setuserData(response.data);
            } else {
                setuserData([]);
            }
        } catch (err) {
            console.log(err)
            alert(err?.message)
            setuserData([]);
        }

    }

    useEffect(() => {
        fetchUserList();
    }, [])

    return (

        <div>Users</div>
    )
}

export default Users