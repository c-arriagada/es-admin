import React, { useState, useEffect, useContext } from "react";
import NavBar from "../components/NavBar"
import BioForm from "../components/BioForm";
import { createBio, allBios, deleteBio, updateBio} from "../client/estilocalico";
import AuthContext from "../client/context";

function BioPage() {
    const [bios, setBios] = useState([])

    const idToken = useContext(AuthContext)

    const reloadBios = async () => {
        let memberBios = await allBios(idToken) // [{...}, {...}]
        // example of object in memberBios array 
        // {
        //     "bio": "Awesome bio!",
        //     "bio_img": null,
        //     "first_name": "Mary",
        //     "id": 2,
        //     "last_name": "R"
        // }
        console.log('Reloading all bios', memberBios)
        setBios(memberBios);
    }

    useEffect(() => {
        idToken && reloadBios()
    }, [idToken])

    const delBio = (bioId, token) => {
        deleteBio(bioId, token)
        .then(reloadBios)
    }

    const newBio = (bioObj, token) => {
        createBio(bioObj, token)
        .then(reloadBios)
    }

    const updBio = (bioObj, token) => {
        updateBio(bioObj, token)
        .then(reloadBios)
    }

    return (
        <>
            <h1>Bios</h1>
            <div className="memberBios">
                <BioForm key={"new"} onSubmit={newBio} />
                {bios && bios.map((bio) => <BioForm key={bio["id"]} startingData={bio} deleteBio ={delBio} updateBio={updBio}/>)}
            </div>
        </>
    )
}

function Bios({user}) {

    return (
        <>
            <AuthContext.Provider value={user.accessToken}>
                <NavBar />
                <BioPage />
            </AuthContext.Provider>
        </>
    )
}

export default Bios;
