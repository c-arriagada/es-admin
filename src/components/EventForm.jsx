import React, { useContext, useState } from "react";
import authContext from '../client/context'

function EventForm(props) {
    const idToken = useContext(authContext)

    const emptyForm = {
        "title": "",
        "start_date": "",
        "start_time": "",
        "venue": "",
        "address": ""
    }
    // test data to populate form
    // const sampleObj = {
    //     "title": "abc", 
    //     "start_date": "2024-01-13T22:45",
    //     "start_time": "2024-01-13T22:45",
    //     "venue": "HOB",
    //     "address": "123 Cute Street"
    // }
    const { onSubmit } = props
    const [formValues, setFormValues] = useState(emptyForm)

    const handleClick = (event) => {
        event.preventDefault()
        onSubmit(formValues, idToken)
        setFormValues(emptyForm)
    }

    return (
        <>
            <form>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" placeholder="Concert" value={formValues.title} onChange={e => setFormValues({ ...formValues, "title": e.target.value })} /><br />
                <label htmlFor="date">Date and time for a one time event:</label>
                <input type="datetime-local" id="start_date" name="start_date" value={formValues.start_date} onChange={e => setFormValues({ ...formValues, "start_date": e.target.value })} /><br />
                <label htmlFor="time">Recurring event, if no recurring event put same date and time as above :</label>
                <input type="datetime-local" id="start_time" name="start_time" value={formValues.start_time} onChange={e => setFormValues({ ...formValues, "start_time": e.target.value })} /><br />
                <label htmlFor="venueName">Venue:</label>
                <input type="text" id="venueName" name="venueName" placeholder="House of Blues" value={formValues.venue} onChange={e => setFormValues({ ...formValues, "venue": e.target.value })} /><br />
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" placeholder="333 Cool Street" value={formValues.address} onChange={e => setFormValues({ ...formValues, "address": e.target.value })} /><br />
                {/* <button type="submit" onClick={handleClick}>Add Event</button> */}
                <button className="addEventBtn" onClick={handleClick}>Add Event</button>
            </form>
        </>
    )
}

export default EventForm;