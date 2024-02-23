const HOST = "https://app.estilocalico.com"

async function allEvents(token) {
    const response = await fetch(`${HOST}/events`, {
        method: 'GET',
        headers: {
            Authorization: token
        }
    });
    const events = response.json();
    return events;
}

async function getEvent(eventId, token) {
    const response = await fetch(`${HOST}/events/${eventId}`, {
                    method: 'GET', 
                    headers: {
                        Authorization: token
                    }
                    });
    const event = response.json()
    console.log(event)
    return event
}

async function createEvent(eventObj, token) {
    const response = await fetch(`${HOST}/events`, {
        method:'POST', 
        headers: {
            "Content-Type":"application/json",
            Authorization: token
        },
        body: JSON.stringify(eventObj)
    });
    const newEvent = response.json();
    console.log(newEvent)
    return newEvent;
}

async function deleteEvent(eventId, token) {
    const response = await fetch(`${HOST}/events/${eventId}`, {
        method:'DELETE', 
        headers: {
            Authorization: token,
        }
    });
    return "Event was deleted";
}

async function updateEvent(eventObj, eventId, token) {
    console.log("[updating event] idToken", token)
    const response = await fetch(`${HOST}/events/${eventId}`, {
        method:'PATCH',
        headers: {
            "Content-type":"application/json",
            Authorization: token,
        },
        body: JSON.stringify(eventObj)
    });
    const updatedEvent = response.json()
    return updatedEvent;
}

export {allEvents, getEvent, createEvent, deleteEvent, updateEvent}