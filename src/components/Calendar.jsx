import React, { useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { allEvents } from '../../client/estilocalico';

function Calendar() {
    const [events, setEvents] = useState()

    useEffect(() => {
        // allEvents returns a Promise. I needed to use .then() to access value 
        // returned by allEvents' Promise
        allEvents().then(events=> setEvents(events))
    }, [])

    return (
        <FullCalendar
            plugins={[dayGridPlugin]}
            events = {
                events
            }
        />
    )
}

export default Calendar

