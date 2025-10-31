import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { baseURL } from '../../constant';
import Loader from '../components/Loader';

const UserInfo = () => {
    const params = useParams();
    const [userData, setuserData] = useState();
    const [loading, setloading] = useState(true);

    const fetchUserData = async () => {
        try {
            const response = await axios(baseURL + "/" + params.userId);
            console.log(response)
            if (response.status === 200) {
                setuserData(response.data);
                setloading(false);
            }
        } catch (err) {
            setloading(false);
            alert(err.message);
        }
    }

    useEffect(() => {
        fetchUserData();
    }, [])

    return (
        <>
            {loading ? <Loader /> :
                <div className='text-center'>
                    <h1>Name : {userData?.name}</h1>
                    <h2>email: {userData?.email}</h2>
                    <h2>Phone: {userData?.phone}</h2>
                    <h2>Company Name: {userData && userData["company name"]}</h2>
                    <h2>Job Title: {userData && userData["job title"]}</h2>
                    {/* <h2>Name : {userData.name}</h2> */}
                </div>
            }
        </>
    )
}

export default UserInfo