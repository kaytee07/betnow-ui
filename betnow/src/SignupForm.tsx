import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

type Data = {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}

const SignUpForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLasttName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
    const handleLastNameChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setLasttName(evt.target.value);
    } 

    const handleFirstNameChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setFirstName(evt.target.value);
    } 

    const handleEmailChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setEmail(evt.target.value);
    } 

    const handlePasswordChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setPassword(evt.target.value);
    }

    const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        const data: Data = {
            firstName,
            lastName,
            email,
            password
        }
        
        try {
            const response = await axios.post('http://localhost:5000/api/signup', data, {
                 headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response)
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstname">first name</label>
                <input onChange={handleFirstNameChange} id="firstname" value={firstName}/>
                <label htmlFor="lastname">first name</label>
                <input onChange={handleLastNameChange} id="lastname" value={lastName}/>
                <label htmlFor="email">email</label>
                <input onChange={handleEmailChange} id="email" value={email}/>
                <label htmlFor="password">password</label>
                <input onChange={handlePasswordChange} id="password" value={password}/>
                <button>Sign up</button>
            </form>
        </div>
    )
}

export default SignUpForm;