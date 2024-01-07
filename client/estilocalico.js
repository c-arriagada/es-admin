async function allEvents() {
    const response = await fetch("http://127.0.0.1:5000/events");
    const events = response.json();
    console.log(events)
    return events;
}

async function getEvent(id) {
    const response = await fetch("http://127.0.0.1:5000/events" + "/" + id);
    const event = response.json()
    console.log(event)
    return event
}

async function createEvent(data) {
    const response = await fetch("http://127.0.0.1:5000/events", {
        method:'POST', 
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    });
    const newEvent = response.json();
    console.log(newEvent)
    return newEvent;
}

export {allEvents, getEvent, createEvent}