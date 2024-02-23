import React, { useContext } from "react";
import authContext from "../client/context"

function Modal({ closeModal, eventDetails, deleteEvent, updateEvent }) {
    const idToken = useContext(authContext);

    let dateTime = new Date(eventDetails.start)
    // let dateTimeISO = dateTime.toISOString()
    let dateTimeISO = dateTime.toLocaleString('sv')
    console.log(dateTimeISO)

    const options = {
        weekday: 'short',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
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
        console.log("[update event] idToken", idToken)
        updateEvent(formValues, eventDetails.id, idToken)
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
                    <form id="modalForm">
                        <label htmlFor="titleModal">Title:</label>
                        <input type="text" name="title" defaultValue={eventDetails.title} /><br />
                        <label htmlFor="dateTimeModal">Date and time:</label>
                        <input type="datetime-local" name="dateTime" defaultValue={dateTimeISO} /><br />
                        <label htmlFor="venueModal">Venue:</label>
                        <input type="text" name="venue" defaultValue={eventDetails.venue} /><br />
                        <label htmlFor="addressModal">Address:</label>
                        <input type="text" name="address" defaultValue={eventDetails.address} /><br />
                        <div className="footer">
                            <button className="updateBtn" type="submit" onClick={handleSubmit}>Update Event</button>
                            <button className="deleteBtn" onClick={() => {
                                console.log('eventId', eventDetails.id)
                                deleteEvent(eventDetails.id, idToken)
                                closeModal(false)
                            }}>Delete Event</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal;

