import React, { useState, useEffect} from "react";
import EventsCard from "../components/EventsCard";
import VideosCard from "../components/VideosCard";
import AuthContext from "../client/context";

function Home() {
    const [idToken, setIdToken] = useState(null)

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
                'redirect_uri': 'http://localhost:8080'
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

    useEffect(() => {
        // get code to exchange for token from query params
        async function x() {
        const urlParams = new URLSearchParams(window.location.search); // replace url.search with window.location.search 
        const code = urlParams.get('code')
        console.log(code)

        const authToken = await getAuthToken(code)
        console.log("authToken in useEffect", authToken)

        setIdToken(authToken)
        }

        x()
    }, [])

    return (
        <>
            <AuthContext.Provider value={idToken}>
                <EventsCard />
            </AuthContext.Provider>
        </>
    )
}

export default Home;