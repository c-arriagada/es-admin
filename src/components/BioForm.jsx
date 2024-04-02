import React, {useContext, useState} from 'react';
import { TextField, Button, Stack, Box } from '@mui/material';
import authContext from '../client/context';

const BioForm = ({onSubmit, startingData, deleteBio, updateBio}) => {
    // const idToken = useContext(authContext)

    const emptyForm = {
        "first_name": "",
        "last_name": "",
        "bio": ""
    }

    const [formValues, setFormValues] = useState(startingData||emptyForm)

    function handleSubmit(event) {
        event.preventDefault();
        onSubmit(formValues) // TODO: add idToken before deploying to production
        setFormValues(emptyForm)
    }
 
    return (
        <>
        <Box
            // component="form"
            sx={{
                display:'flex', 
                flexWrap: 'wrap',
                width: '75%'
            }}
            noValidate
            autoComplete="off"
        >
            <form onSubmit={handleSubmit}>
                <Stack spacing={2} direction="row" sx={{marginBottom: 1}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        size='small'
                        label="First Name"
                        // sx={{ m: 1, width: '30ch' }}
                        onChange={e => setFormValues({...formValues, "first_name": e.target.value})}
                        value={formValues.first_name}
                        fullWidth
                        required
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        size = 'small'
                        label="Last Name"
                        // sx={{ m: 1, width: '30ch' }}
                        onChange={e => setFormValues({...formValues, "last_name": e.target.value})}
                        value={formValues.last_name}
                        fullWidth
                        required
                    />
                </Stack>
                <TextField
                    variant='outlined'
                    color='secondary'
                    label="Bio"
                    onChange={e => setFormValues({...formValues, "bio": e.target.value})}
                    value={formValues.bio}
                    multiline
                    rows={12}
                    fullWidth
                    required
                />
                <Stack spacing={2} direction="row" sx={{marginBottom: 3}}>
                {!startingData ? <Button key="create"
                                            variant="outlined" 
                                            size='small' 
                                            color="secondary" 
                                            type="submit">
                                                Add New Bio
                                        </Button>: 
                [<Button key="save" 
                            variant="outlined" 
                            size="small" 
                            color='secondary' 
                            onClick={()=>updateBio(formValues)}>
                                Save
                        </Button>,
                <Button key="del"
                            variant="outlined" 
                            size="small" 
                            color='error' 
                            onClick={()=>deleteBio(formValues["id"])}>
                                Delete
                        </Button>]}
                </Stack>
            </form>
        </Box>
    </>
    )
}
 
export default BioForm;