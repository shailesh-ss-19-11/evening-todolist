import axios from 'axios';
import React, { useState } from 'react'
import { baseURL } from '../../constant';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    let obj = { ...inputs };
    const { name, value } = e.target;
    obj[name] = value;
    setInputs(obj);
  }

  console.log(inputs)

  const addUser = async () => {
    try {
      const response = await axios.post(baseURL, inputs);
      if (response.status === 201) {
        navigate(-1); //go back
      }
    } catch (err) {
      alert(err.message);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser()
  }

  return (
    <form className='container' onSubmit={handleSubmit}>
      <div>
        <label for="basic-url">Full Name</label>
        <div class="input-group mb-3">
          <input type="text" class="form-control" name='name' onChange={handleChange} value={inputs?.name} />
        </div>
      </div>
      <div>
        <label for="basic-url">Email</label>
        <div class="input-group mb-3">
          <input type="text" class="form-control" name='email' onChange={handleChange} value={inputs?.email} />
        </div>
      </div>
      <div>
        <label for="basic-url">Mobile</label>
        <div class="input-group mb-3">
          <input type="text" class="form-control" name='phone' onChange={handleChange} value={inputs?.phone} />
        </div>
      </div>
      <div>
        <label for="basic-url">Job Title</label>
        <div class="input-group mb-3">
          <input type="text" class="form-control" name='job title' onChange={handleChange} value={inputs["job title"]} />
        </div>
      </div>
      <div>
        <label for="basic-url">Company Name</label>
        <div class="input-group mb-3">
          <input type="text" class="form-control" name='company name' onChange={handleChange} value={inputs["company name"]} />
        </div>
      </div>
      <div>
        <button className='btn btn-lg btn-primary'>Submit</button>
      </div>

    </form>
  )
}

export default AddUser