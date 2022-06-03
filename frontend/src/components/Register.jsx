import { useState } from "react";
import { registerApi } from "../api/api";

export default function Register() {

    const [user,setUser] = useState({
        "email": "",
        "password": ""
    })

    const handleClick = (e) => {
        e.preventDefault()
        registerApi(user)
    }

    return (
        <form>
            <h2>Register</h2>
            <label htmlFor="email">
                <input type="text" name="email" id="" placeholder="email" onChange={(e) => {setUser({...user, email: e.target.value})}}/>
            </label>
            <label htmlFor="password">
                <input type="password" name="password" id="" placeholder="password" onChange={(e) => {setUser({...user, password: e.target.value})}}/>
            </label>
            <button type="submit" onClick={handleClick}>Register</button>
        </form>
    );
};