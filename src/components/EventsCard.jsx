import React from "react";
import Button from "./Button"
import Tester from "../../client/tester"
import Calendar from "./Calendar";
import Form from "./Form";

function EventsCard() {

    return (
        <>
            <h2>Events</h2>
            <div>
                <p>Display events from DB</p>
                <p>Each item will have an update and delete button option</p>
            </div>
            <Form />
            {/* <Button label={"Add Event"} /> */}
            <Calendar />
            <Tester />
        </>
    )
}

export default EventsCard;