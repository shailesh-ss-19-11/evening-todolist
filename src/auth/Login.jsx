import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [input, setinput] = useState({ username: "", password: "" });

    const handleInputChange = (e) => {
        console.dir(e.target)
        const existingInput = { ...input };

        const { name, value } = e.target;
        existingInput[name] = value;
        setinput(existingInput);
    }

    const handleSubmit = async () => {
        try {
            const newInput = { ...input, expiresInMins: 30 };
            const response = await axios.post("https://dummyjson.com/auth/login", newInput, {
                headers: { 'Content-Type': 'application/json' },
            });
            if (response.status === 200) {
                localStorage.setItem("userdata", btoa(JSON.stringify(response.data)));
                navigate("/");
            }
            console.log(response, "response")
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