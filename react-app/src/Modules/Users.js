import React from 'react';
import './../App.css'
import UserServices from "../UserServices";
import EntryServices from "../EntryServices";

function Users({users}) {
    console.log("users", users)

    const handleDelete = (id) => {
        UserServices.remove(id + 1).then(response => {

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
                                <button onClick={handleDelete(id)}>delete</button>
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