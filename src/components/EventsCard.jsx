import React, { useEffect, useState} from "react";
import Button from "./Button"
import Tester from "../../client/tester"
import Form from "./Form";
import { allEvents } from '../../client/estilocalico';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

function EventsCard() {
    const [events, setEvents] = useState()

    useEffect(() => {
        // allEvents returns a Promise. I needed to use .then() to access value 
        // returned by allEvents' Promise
        allEvents().then(events=> setEvents(events))
    }, [])

    return (
        <>
            <h2>Events</h2>
            <div>
                <p>Display events from DB</p>
                <p>Each item will have an update and delete button option</p>
            </div>
            <Form />
            {/* <Button label={"Add Event"} /> */}
            <FullCalendar
            plugins={[dayGridPlugin]}
            events = {
                events
            }
            />
            <Tester />
        </>
    )
}

export default EventsCard;