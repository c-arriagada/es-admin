import React, { useState, useEffect } from 'react';
import { Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Login from './pages/Login';
import Bios from "./pages/Bios";
import Videos from './pages/Videos';
import { useNavigate } from 'react-router-dom';
import { getAuthToken } from './client/estilocalico';
import './styles.css'

function App() {
    const [user, setUser] = useState({});

    const navigate = useNavigate()

    let callback = window.location.search;
     
    useEffect(() => {
        const updateUser = async () => {
            const urlParams = new URLSearchParams(window.location.search);
            let tempCode = urlParams.get('code')
            if(!tempCode) {
                return;
            }
            let accessToken = await getAuthToken(tempCode)
            if(accessToken) {
                let [header, body, signature] = accessToken.split('.')
                //  "atob" below should be read as "ASCII to binary". It decodes a Base64-encoded string.
                setUser({...user, code: tempCode, accessToken, identity:JSON.parse(atob(body))})
                navigate('/home')  
            }
            
        }
        updateUser();
    }, [callback])

    console.log(user)

    return (
            <Routes>
                    <Route index element={<Login />} />
                    <Route path="home" element={<Home user={user} />} />
                    <Route path="bios" element={<Bios user={user}/>} />
                    <Route path="videos" element={<Videos user={user}/>} />
                    <Route path="login" element={<Login />} />
            </Routes>
    )
}

export default App;