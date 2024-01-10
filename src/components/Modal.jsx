import React from "react";

function Modal({ closeModal, eventDetails, deleteEvent}) {
    let dateTime = new Date(eventDetails.start)

    const options = {
        weekday:'short',
        year:'numeric',
        month:'long',
        day:'numeric',
        hour:'numeric',
        minute: '2-digit'
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
                        }}>Delete event</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;

