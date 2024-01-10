import React from "react";

function Modal({closeModal}) {

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={()=> closeModal(false)}>X</button>
                </div>
                <div className="title">
                    <h1>Event</h1>
                </div>
                <div className="body">
                    <p>event details</p>
                </div>
                <div className="footer">
                    <button>Update event</button>
                    <button>Delete event</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;

