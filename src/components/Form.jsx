import React from "react";

function Form() {
    return (
        <>
            <form>
                <label for="date">Date:</label>
                <input type="date" id="date" name="date" /><br />
                <label for="venueName">Venue:</label>
                <input type="text" id="venueName" name="venueName" /><br />
                <label for="address">Address:</label>
                <input type="text" id="address" name="address" />
                <label for="time">Time:</label>
                <input type="text" id="time" name="time" />
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default Form;