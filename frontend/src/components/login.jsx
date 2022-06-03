import { useState } from "react";
import { LoginApi } from "../api/api";

export default function Login() {

    const [user,setUser] = useState({
        "username": "",
        "password": ""
    })

    const handleClick = (e) => {
        e.preventDefault()
        LoginApi(user)
    }

    return (
        <form>
            <h2>Login</h2>
            <label htmlFor="username">
                <input type="text" name="username" id="username" placeholder="email" onChange={(e) => {setUser({...user, username: e.target.value})}}/>
            </label>
            <label htmlFor="password">
                <input type="password" name="password" id="password" placeholder="password" onChange={(e) => {setUser({...user, password: e.target.value})}}/>
            </label>
            <input type="hidden" name={"token"}/>
            <button type="submit" onClick={handleClick}>Login</button>
        </form>
    );
};