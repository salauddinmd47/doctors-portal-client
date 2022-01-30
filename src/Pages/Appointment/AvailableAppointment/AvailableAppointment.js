import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Booking from '../Booking/Booking';
const bookings = [
    {
        id:1,
        name:'Teeth Orthodontics',
        time: '09 am to 10.30 am',
        space: 10
    },
    {
        id:2,
        name:'Cosmetic Dentistry',
        time: '11 am to 12 pm',
        space: 10
    },
    {
        id:3,
        name:'Teeth Cleaning',
        time: '09 am to 10.30 am',
        space: 10
    },
    {
        id:4,
        name:'Cavity Protection',
        time: '2 pm to 4 pm',
        space: 10
    },
    {
        id:5,
        name:'Root Canals',
        time: '6 pm to 8 pm',
        space: 10
    },
    {
        id:6,
        name:'Teeth Ceiling',
        time: '7 pm to 9pm',
        space: 10
    },
]
const AvailableAppointment = ({date}) => {
    return (
        <Container sx={{ mb:10 }}>
            <Typography variant='h4' sx={{ color:'#42E5F2',my:3 }}>Available Appointment {date.toDateString()}</Typography>
            <Grid container spacing={2}>
                {
                   bookings.map(booking=> <Booking
                    key={booking.id}
                    booking={booking}
                    date={date}
                   ></Booking>) 
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;