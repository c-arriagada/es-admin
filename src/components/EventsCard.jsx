import React, { useEffect, useState } from "react";
import EventForm from "./EventForm";
import { allEvents, createEvent, deleteEvent, updateEvent } from '../client/estilocalico';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import Modal from './Modal'

function EventsCard() {
    const [events, setEvents] = useState([])
    const [openModal, setOpenModal] = useState()
    const [eventDetails, setEventDetails] = useState()

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

    const delEvent = (eventId) => {
        console.log('deleting event', eventId)
        deleteEvent(eventId)
            .then(() => {
                const updatedEvents = events.filter((event) => event.id.toString() !== eventId)
                setEvents(updatedEvents)
                console.log(`event with id ${eventId} was deleted`)
            })
    }

    const updEvent = (eventObj, eventId) => {
        updateEvent(eventObj, eventId)
            .then((updatedEvent) => {
                // reset state with the information of the updated event
                // find event that was updated
                // update event info
                console.log(updatedEvent)
                const updatedEvents = events.map((oldEvent) => {
                    if (oldEvent.id.toString() === eventId) {
                        return { ...oldEvent, ...updatedEvent }
                    } else {
                        return oldEvent
                    }
                })
                console.log('updatedEvents', updatedEvents)
                // reset events state
                setEvents([...updatedEvents])
                console.log(`event with id ${eventId} was updated`)
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
            {!openModal &&
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    events={
                        events
                    }
                    eventClick={(e) => {
                        setEventDetails({
                            'id': e.event.id,
                            'title': e.event.title,
                            'start': e.event.start,
                            'startTime': e.event.startTime,
                            'venue': e.event.extendedProps.venue,
                            'address': e.event.extendedProps.address
                        })
                        setOpenModal(true)
                    }}
                />
            }
            {openModal && <Modal closeModal={setOpenModal}
                eventDetails={eventDetails}
                deleteEvent={delEvent}
                updateEvent={updEvent}
            />}
        </>
    )
}

export default EventsCard;