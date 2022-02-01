import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../../Appointment/Modal/BookingModal'

const Booking = ({booking, date,setBookingSuccess}) => {
    const {name, time, space} = booking
    const [bookingOpen, setBookingOpen] = React.useState(false);
    const handleModalOpen = () => setBookingOpen(true);
    const handleModalColse = () => setBookingOpen(false);
    return (
        <>
        <Grid item sm={12} md={4} xs={12}>
             <Paper sx={{ py:5 }}>
                 <Typography sx={{ color:'#42E5F2' }} variant='h5'>
                     {name}
                 </Typography>
                 <Typography variant='h6'>
                     {time}
                 </Typography>
                 <Typography variant='caption'>
                     {space}   space available
                 </Typography>
                 <br />
                 <Button onClick={handleModalOpen} variant="contained" sx={{ backgroundColor: "#42E5F2", mt:2 }}>
              Learn more
            </Button>
                 
            </Paper>    
        </Grid>
        <BookingModal
        bookingOpen={bookingOpen}
        booking={booking}
        date={date}
        setBookingSuccess={setBookingSuccess}
        handleModalColse={handleModalColse}
        ></BookingModal>
        </>
    );
};

export default Booking;