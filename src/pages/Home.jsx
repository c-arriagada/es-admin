import React, { useState, useEffect } from "react";
import EventsCard from "../components/EventsCard";
import VideosCard from "../components/VideosCard";
import AuthContext from "../client/context";
import NavBar from "../components/NavBar"

function Home({user}) {

    return (
        <>
            <AuthContext.Provider value={user.accessToken}>
                <NavBar />
                <EventsCard />
            </AuthContext.Provider>
        </>
    )
}

export default Home;