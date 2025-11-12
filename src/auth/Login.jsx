import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [inputs, setinput] = useState({ username: "", password: "" });

    const handleInputChange = (e) => {
        const { name, value } = e.target
        const existinginput = { ...inputs };
        existinginput[name] = value;
        setinput(existinginput);
    }

    const handleSubmit = async () => {
        try {
            console.log(inputs)
            const response = await axios.post("https://dummyjson.com/auth/login",
                inputs,
                {
                    headers: { "Content-Type": 'application/json' }
                })
                if(response.status===200){
                    localStorage.setItem("userData",JSON.stringify(response.data));
                    navigate("/");
                }
            console.log(response);
        } catch (err) {
            console.log(err);
        }

    }


    return (
        <>
            <div className="container">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Enter Username" name="username" onChange={handleInputChange} />
                </div>
                <div className="input-group mb-3">
                    <input type="password" className="form-control" placeholder="Enter Password" name="password" onChange={handleInputChange} />
                </div>
                <div>
                    <button className="btn btn-sm btn-primary" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </>
    )
}

export default Login