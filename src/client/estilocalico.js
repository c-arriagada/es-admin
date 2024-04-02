// const HOST = "https://app.estilocalico.com"
// The host name matters a lot - CURL OPTIONS requests will fail to `http://localhost:5000`
// and they will succeed when asking for `http://127.0.0.1:5000`
const HOST = "http://127.0.0.1:5000"

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
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        },
        body: JSON.stringify(eventObj)
    });
    const newEvent = response.json();
    return newEvent;
}

async function deleteEvent(eventId, token) {
    const response = await fetch(`${HOST}/events/${eventId}`, {
        method: 'DELETE',
        headers: {
            Authorization: token,
        }
    });
    return "Event was deleted";
}

async function updateEvent(eventObj, eventId, token) {
    console.log("[updating event] idToken", token)
    const response = await fetch(`${HOST}/events/${eventId}`, {
        method: 'PATCH',
        headers: {
            "Content-type": "application/json",
            Authorization: token,
        },
        body: JSON.stringify(eventObj)
    });
    const updatedEvent = response.json()
    return updatedEvent;
}

// get code to exchange for token from query params
async function getAuthToken(code) {
    let url = "https://estilocalico.auth.us-east-2.amazoncognito.com/oauth2/token"

    let postOptions = {
        'method': 'POST',
        'headers': {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        'body': new URLSearchParams({
            'grant_type': 'authorization_code',
            'client_id': '7nk2p2fkrha638okq6m2tbobir',
            'code': `${code}`,
            'redirect_uri': 'http://localhost:8080' // change to https://admin.estilocalico.com before deploying
        })
    }
    console.log("[get auth token] request options", postOptions)
    const authToken = await fetch(url, postOptions)
        .then(response => response.json())
        .then(tokenResponse => {
            console.log('[get auth token] id_token response', tokenResponse.id_token)
            return tokenResponse.id_token;
        });
    // console.log(authToken)
    return authToken;
}

async function allBios(token) {
    const response = await fetch(`${HOST}/bios`, {
        method: 'GET',
        headers: {
            Authorization: token
        }
    });
    const bios = response.json();
    return bios;
}

async function getBio(bioId, token) {
    const response = await fetch(`${HOST}/bios/${bioId}`, {
        method: 'GET',
        headers: {
            Authorization: token
        }
    });
    const bio = response.json()
    console.log(bio)
    return bio
}

async function createBio(bioObj, token) {
    const response = await fetch(`${HOST}/bios`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        },
        body: JSON.stringify(bioObj)
    });
    const newBio = response.json();
    return newBio;
}

async function deleteBio(bioId, token) {
    const response = await fetch(`${HOST}bios/${bioId}`, {
        method: 'DELETE',
        headers: {
            Authorization: token,
        }
    });
    return "Bio was deleted";
}

async function updateBio(bioObj, bioId, token) {
    console.log("[updating event] idToken", token)
    const response = await fetch(`${HOST}/bios/${bioId}`, {
        method: 'PATCH',
        headers: {
            "Content-type": "application/json",
            Authorization: token,
        },
        body: JSON.stringify(bioObj)
    });
    const updatedEvent = response.json()
    return updatedEvent;
}

export { 
    allEvents, 
    getEvent, 
    createEvent, 
    deleteEvent, 
    updateEvent, 
    getAuthToken,
    allBios,
    getBio,
    createBio,
    updateBio,
    deleteBio 
    }