import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { baseURL } from '../../constant';

const UpdateUser = () => {
    const params = useParams();
    console.log(params.userId);
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();
    async function fetchUserInfo() {
        try {
            const response = await axios.get(baseURL + "/" + params.userId);
            console.log(response)
            if (response.status === 200) {
                setInputs(response.data);
            }
        } catch (err) {
            alert(err.message)
        }
    }

    useEffect(() => {
        fetchUserInfo();
    }, [])
    console.log(inputs);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const existingInput = { ...inputs };
        existingInput[name] = value;
        setInputs(existingInput);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(baseURL + "/" + params.userId, inputs);
            console.log(response);
            if (response.status === 200) {
                navigate(-1);
            }
        } catch (err) {
            alert(err.message);
        }

    }

    return (
        <form className='container' onSubmit={handleSubmit}>
            <div>
                <label for="basic-url">Full Name</label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" name='name' value={inputs?.name} onChange={handleChange} />
                </div>
            </div>
            <div>
                <label for="basic-url">Email</label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" name='email' value={inputs?.email} onChange={handleChange} />
                </div>
            </div>
            <div>
                <label for="basic-url">Mobile</label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" name='phone' value={inputs?.phone} onChange={handleChange} />
                </div>
            </div>
            <div>
                <label for="basic-url">Job Title</label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" name='job title' value={inputs && inputs["job title"]} onChange={handleChange} />
                </div>
            </div>
            <div>
                <label for="basic-url">Company Name</label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" name='company name' value={inputs && inputs["company name"]} onChange={handleChange} />
                </div>
            </div>
            <div>
                <button className='btn btn-lg btn-primary' type='submit'>Submit</button>
            </div>

        </form>
    )
}

export default UpdateUser