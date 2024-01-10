import React, { useEffect, useState } from "react";
import Tester from "../../client/tester"
import EventForm from "./EventForm";
import { allEvents, createEvent } from '../../client/estilocalico';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import Modal from './Modal'

function EventsCard() {
    const [events, setEvents] = useState()
    const [openModal, setOpenModal] = useState()

    useEffect(() => {
        // allEvents returns a Promise. I needed to use .then() to access value 
        // returned by allEvents' Promise
        allEvents().then(setEvents)
    }, [])

    const addEvent = (event) => {
        console.log('creating event', event)
        createEvent(event)
            .then(createdEvent => {
                setEvents([...events, createdEvent])
                console.log('created event', createdEvent)
            })
    }

    return (
        <>
            <h2>Events</h2>
            <div>
                <p>Display events from DB</p>
                <p>Each item will have an update and delete button option</p>
            </div>
            <EventForm onSubmit={addEvent} />
            <FullCalendar
                plugins={[dayGridPlugin]}
                events={
                    events
                }
                eventClick={(e) => {
                    console.log(e.event.title, e.event.start, e.event.extendedProps.venue, e.event.extendedProps.address)
                    setOpenModal(true)
                }}
            // eventClick={(eventInFullCalendarFormat) => { 
            //          const evenObj = transformFullCalendarEvent(eventInFullCalendarFormat)
            //          openModal(eventObj)
            // }         
            />
            {openModal && <Modal closeModal={setOpenModal} />}
        </>
    )
}

export default EventsCard;