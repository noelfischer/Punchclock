import React from 'react';
import './../App.css'
import EntryServices from "../EntryServices";

function Entries({entries}) {
    console.log(2, entries)

    const handleDelete = (id) => {
        EntryServices.remove(id + 1).then(response => {

        })
        console.log(id)
    }

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>id</th>
                    <th>Check In</th>
                    <th>Check Out</th>
                </tr>
                </thead>
                <tbody>
                {entries.map((entry, id) => {
                    return (
                        <tr key={id}>
                            <td>{entry.id}:</td>
                            <td>{new Date(entry.checkIn).toLocaleString()}</td>
                            <td>{new Date(entry.checkOut).toLocaleString()}</td>
                            <td>
                                <button onClick={() => handleDelete(id)}>delete</button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}

export default Entries