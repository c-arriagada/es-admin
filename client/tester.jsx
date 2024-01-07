import React from "react"
import { allEvents, getEvent, createEvent } from "./estilocalico"

function Tester() {

    const data = {
        'start_date': '2024-01-20',
        'start_time': '2024-01-20T18:00:00Z',
        'venue': 'Great venue 5',
        'address': '5555 Great Street'
    }

    return (
        <div>
            <button onClick={() => allEvents().then((x)=> console.log(x))}>Read</button>
            <button onClick={() => createEvent(data)}>Create</button>
            <button>Update</button>
            <button>Delete</button>
        </div>
    )
}

export default Tester