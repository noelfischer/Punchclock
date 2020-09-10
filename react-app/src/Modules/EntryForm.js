import React, {useState} from 'react';
import EntriyService from './../EntryServices'

const dateAndTimeToDate = (dateString, timeString) => {
    console.log(dateString)
    return new Date(`${dateString}T${timeString}`).toISOString();
};

function EntryForm(setEntry) {

    const [cid, setCid] = useState("");
    const [cit, setCit] = useState("");
    const [cod, setCod] = useState("");
    const [cot, setCot] = useState("");

    const handleCid = (event) => setCid(event.target.value)
    const handleCit = (event) => setCit(event.target.value)
    const handleCod = (event) => setCod(event.target.value)
    const handleCot = (event) => setCot(event.target.value)

    const addEntry = event => {
        event.preventDefault()

        let newEntry = {
            checkIn: dateAndTimeToDate(cid, cit),
            checkOut: dateAndTimeToDate(cod, cot)
        }
        EntriyService.create(newEntry).then(respons => {
            //setEntry(newEntry)
        })
        console.log(newEntry)
    }

    return (
        <form>
            <div>
                <label htmlFor="checkIn">Check in</label>
                <input type="date" value={cid} onChange={handleCid} required/>
                <input type="time" value={cit} onChange={handleCit} required/>
                <br/>
                <label htmlFor="checkOut">Check out</label>
                <input type="date" value={cod} onChange={handleCod} required/>
                <input type="time" value={cot} onChange={handleCot} required/>
                <br/>
                <input type="submit" value="Save" onClick={addEntry}/>
            </div>
        </form>
    )
}

export default EntryForm