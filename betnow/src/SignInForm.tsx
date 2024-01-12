import { useState, ChangeEvent, FormEvent } from "react";
import GetOddsBtn from "./GetOddsBtn";
import Uploadform from "./Uploadform";
import BuyOddsBtns from "./BuyOddsBtns";

import axios from "axios";

type Data = {
    email: string,
    password: string
}

const SignInForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
      const [token, setToken] = useState("");

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
                }
            });
            console.log(response.data); // Assuming you want to access the response data
            setToken(response.data?.token)
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input onChange={handleEmailChange} id="email" value={email}/>
                <label htmlFor="password">password</label>
                <input onChange={handlePasswordChange} id="password" value={password}/>
                <button>Sign in</button>
                <p>Dont have an account ? <a>sign up</a></p>
            </form>
            <Uploadform accessToken={token} />
            <GetOddsBtn accessToken={token} />
            <BuyOddsBtns />
        </div>
    )
}

export default SignInForm;
