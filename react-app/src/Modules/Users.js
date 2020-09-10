import React from 'react';
import './../App.css'
import UserServices from "../UserServices";
import EntryServices from "../EntryServices";

function Users({users}) {
    console.log("users", users)

    const handleDelete = (id) => {
        UserServices.remove(id).then(response => {
            window.location.reload(false);
        })
    }
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
                {users.map((users, id) => {
                    return (
                        <tr key={id}>
                            <td>{users.id}</td>
                            <td><input type="text" value={users.username} /></td>
                            <td><input type="text" /></td>
                            <td>
                                update
                            </td>
                            <td>
                                <button onClick={()=>handleDelete(users.id)}>delete</button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}

export default Users