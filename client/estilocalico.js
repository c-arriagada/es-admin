async function allEvents() {
    const response = await fetch("http://127.0.0.1:5000/events");
    const events = response.json();
    return events;
}

async function getEvent(id) {
    const response = await fetch("http://127.0.0.1:5000/events" + "/" + id);
    const event = response.json()
    console.log(event)
    return event
}

async function createEvent(eventObj) {
    const response = await fetch("http://127.0.0.1:5000/events", {
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
    const response = await fetch("http://127.0.0.1:5000/events" + "/" + eventId, {
        method:'DELETE', 
    });
    return "Event was deleted";
}

export {allEvents, getEvent, createEvent, deleteEvent}