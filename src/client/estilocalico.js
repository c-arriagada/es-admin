const HOST = "https://app.estilocalico.com"

async function allEvents() {
    const response = await fetch(`${HOST}/events`);
    const events = response.json();
    return events;
}

async function getEvent(eventId) {
    const response = await fetch(`${HOST}/events/${eventId}`);
    const event = response.json()
    console.log(event)
    return event
}

async function createEvent(eventObj) {
    const response = await fetch(`${HOST}/events`, {
        method:'POST', 
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(eventObj)
    });
    const newEvent = response.json();
    console.log(newEvent)
    return newEvent;
}

async function deleteEvent(eventId) {
    const response = await fetch(`${HOST}/events/${eventId}`, {
        method:'DELETE', 
    });
    return "Event was deleted";
}

async function updateEvent(eventObj, eventId) {
    const response = await fetch(`${HOST}/events/${eventId}`, {
        method:'PATCH',
        headers: {
            "Content-type":"application/json"
        },
        body: JSON.stringify(eventObj)
    });
    const updatedEvent = response.json()
    return updatedEvent;
}

export {allEvents, getEvent, createEvent, deleteEvent, updateEvent}