import React from "react";

function Modal({ closeModal, eventDetails, deleteEvent, updateEvent}) {
    let dateTime = new Date(eventDetails.start)
    // let dateTimeISO = dateTime.toISOString()
    let dateTimeISO = dateTime.toLocaleString('sv')
    console.log(dateTimeISO)

    const options = {
        weekday:'short',
        year:'numeric',
        month:'long',
        day:'numeric',
        hour:'numeric',
        minute: '2-digit'
    }

    function handleSubmit(e) {
        e.preventDefault()
        const form = document.getElementById('modalForm')
        const data = new FormData(form)
        const formValues = {
            "title": data.get('title'),
            "start_date": data.get('dateTime'),
            "venue": data.get('venue'),
            "address": data.get('address')
        }
        updateEvent(formValues, eventDetails.id)
        closeModal(false)
    }

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => closeModal(false)}>X</button>
                </div>
                <div className="title">
                    <h1>Event</h1>
                </div>
                <div className="body">
                    <p>{eventDetails.title}</p>
                    <p>{dateTime.toLocaleString([], options)}</p>
                    {/* <p>{new Date(eventDetails.startTime).toLocaleTimeString}</p> */}
                    <p>{eventDetails.venue}</p>
                    <p>{eventDetails.address}</p>
                </div>
                <div className="footer">
                    <button>Update event</button>
                    <button onClick={()=> {
                        console.log('eventId', eventDetails.id)
                        deleteEvent(eventDetails.id)
                        closeModal(false)
                        }}>Delete event</button>
                </div>
                <div>
                    <form id="modalForm">
                        <label htmlFor="titleModal">Title:</label>
                        <input type="text" name="title" defaultValue={eventDetails.title} /><br/>
                        <label htmlFor="dateTimeModal">Date and time:</label>
                        {/* <input type="datetime-local" name="dateTime" defaultValue={dateTimeISO.slice(0,-8)} /><br/> */}
                        <input type="datetime-local" name="dateTime" defaultValue={dateTimeISO} /><br/>
                        <label htmlFor="venueModal">Venue:</label>
                        <input type="text" name="venue" defaultValue={eventDetails.venue} /><br/>
                        <label htmlFor="addressModal">Address:</label>
                        <input type="text" name="address" defaultValue={eventDetails.address} /><br/>
                        <button type="submit" onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal;

