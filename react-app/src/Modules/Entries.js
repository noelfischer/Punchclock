import React from 'react';
import './../App.css'

function Entries({entries}) {
    console.log(2, entries)

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
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}

export default Entries