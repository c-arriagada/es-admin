import React, {useState} from 'react';
import { TextField, Button, Stack } from '@mui/material';
 
const BioForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [bio, setBio] = useState('')
 
    function handleSubmit(event) {
        event.preventDefault();
        console.log(firstName, lastName, bio) 
        // TODO: add logic to store bios in database
    }
 
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="First Name"
                        onChange={e => setFirstName(e.target.value)}
                        value={firstName}
                        fullWidth
                        required
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Last Name"
                        onChange={e => setLastName(e.target.value)}
                        value={lastName}
                        fullWidth
                        required
                    />
                </Stack>
                <TextField
                    variant='outlined'
                    color='secondary'
                    label="Bio"
                    onChange={e => setBio(e.target.value)}
                    value={bio}
                    multiline
                    fullWidth
                    required
                />
                <Button variant="outlined" color="secondary" type="submit">Add New Bio</Button>
            </form>
        </>
    )
}
 
export default BioForm;