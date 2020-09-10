import React, {useState} from 'react';
import UserService from "../UserServices";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (event) => setUsername(event.target.value)
    const handlePasswordChange = (event) => setPassword(event.target.value)

    const addEntry = event => {
        event.preventDefault()

        let newUser = {
            "username": username,
            "password": password
        }
        UserService.login(newUser).then(respons => {
            console.log(respons.headers.authorization)
            localStorage.setItem("token", respons.headers.authorization)
        })
    }

    return (
        <form>
            <label htmlFor="checkIn">Username</label>
            <input type="text" value={username} onChange={handleUsernameChange} required/>
            <br/>
            <label htmlFor="checkIn">Password</label>
            <input type="text" value={password} onChange={handlePasswordChange} required/>

            <input type="submit" value="Save" onClick={addEntry}/>
        </form>
    )
}


export default Login