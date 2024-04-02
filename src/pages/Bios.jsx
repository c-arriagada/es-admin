import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar"
import BioForm from "../components/BioForm";
import BioCard from "../components/BioCard";
import { createBio, allBios, deleteBio} from "../client/estilocalico";
import { create } from "@mui/material/styles/createTransitions";

function Bios() {
    const [bios, setBios] = useState([])

    const reloadBios = async () => {
        let memberBios = await allBios() // [{...}, {...}]
        // example of object in memberBios array 
        // {
        //     "bio": "Awesome bio!",
        //     "bio_img": null,
        //     "first_name": "Mary",
        //     "id": 2,
        //     "last_name": "Raffanti"
        // }
        console.log(memberBios)
        setBios(memberBios);
    }

    useEffect(() => {
        reloadBios()
    }, [])

    const delBio = (bioId) => {
        deleteBio(bioId)
        .then(reloadBios)
    }

    const newBio = (bioObj) => {
        createBio(bioObj)
        .then(reloadBios)
    }

    const bioCards = bios.map((bio) => <BioCard bio={bio} deleteBio={delBio}/>)

    return (
        <>
            <NavBar />
            <h1>Bios</h1>
            <BioForm onSubmit={newBio} />
            {bioCards}
        </>
    )
}

export default Bios;