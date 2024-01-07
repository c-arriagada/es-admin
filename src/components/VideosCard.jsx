import React from "react";
import Button from "./Button"

function VideosCard() {
    
 return (
    <>
        <h2>Videos</h2>
        <div>
            <p>Display videos from S3</p>
            <p>Each video will have a delete button option</p>
        </div>
        <Button label={"Upload Video"}/>
    </>
 )
}

export default VideosCard;