import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')

    const handleOnBlur= e =>{
        setEmail(e.target.value)
        console.log(e.target.value)
    }
    const handleMakeAdmin = e => {
        const user = {email}
        console.log(user)
        fetch('http://localhost:5000/users/admin', {
            method:'PUT',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user), 
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                console.log(data)

            }
        })
        e.preventDefault()
    }

    return (
        <div>
            <h2>Lets make an admin</h2>
            <form onSubmit={handleMakeAdmin}>
            <TextField 
            id="standard-basic" 
            label="Email" 
            type="email"
            variant="standard"
            sx={{ width:'50%' }}
            onBlur={handleOnBlur}
             />
            
            <Button type="submit" variant="contained">Make Admin</Button>
            </form>
         
        </div>
    );
};

export default MakeAdmin;