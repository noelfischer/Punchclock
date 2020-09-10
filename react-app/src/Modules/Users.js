import React, {useState} from 'react';
import './../App.css'
import UserServices from "../UserServices";
import EntryServices from "../EntryServices";

function Users({users}) {
    console.log("users", users)


    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>id</th>
                    <th>Username</th>
                    <th>Password</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => {
                    return(
                   <User user={user}/>
                    )

                })}
                </tbody>
            </table>
        </div>
    )
}

function User({user, id}){
    const [username, setUsername] = useState(user.username);
    const [password, setPassword] = useState("");

    const handleUsername = (event) => setUsername(event.target.value)
    const handlePassword = (event) => setPassword(event.target.value)

    const handleDelete = () => {
        UserServices.remove(user.id).then(response => {
            window.location.reload(false);
        })
    }
    const handleUpdate = () => {

        let newUser = {
            "id": user.id,
            "username": username,
            "password": password,
            "role": {
                "id": 1
            }
        }

        UserServices.update(id, newUser).then(response => {
            window.location.reload(false);
        })
    }

    return (
        <tr key={id}>
            <td>{user.id}</td>
            <td><input type="text" value={username} onChange={handleUsername} required/></td>
            <td><input type="text" value={password} onChange={handlePassword} required/></td>
            <td>
                <button onClick={() => handleUpdate()}>update</button>
            </td>
            <td>
                <button onClick={() => handleDelete()}>delete</button>
            </td>
        </tr>
    )


}

export default Users