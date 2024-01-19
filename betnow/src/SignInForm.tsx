import { useState, ChangeEvent, FormEvent } from "react";
import "./pages/styles/SignInForm.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from "axios";

type Data = {
    email: string,
    password: string
}

const SignInForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleEmailChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setEmail(evt.target.value)
    } 

    const handlePasswordChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setPassword(evt.target.value)
    }

    const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        const data: Data = {
            email,
            password
        }

        try {
            const response = await axios.post('http://localhost:5000/api/login', data, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            console.log(response.data)
            window.location.href = response.data
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="signin-form">
                <div className="email">
                    <label htmlFor="email">email</label>
                    <input onChange={handleEmailChange} id="email" value={email}/>
                </div>
                <div className="password">
                    <label htmlFor="password">password</label>
                    <input onChange={handlePasswordChange} id="password" value={password}/>
                </div>
                <button>Sign in</button>
            </form>
        </div>
    )
}

export default SignInForm;
