import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const BookingModal = ({ bookingOpen, handleModalColse, booking, date }) => {
  const { name, time } = booking;

  const handleBookingSubmit = (e)=>{
      alert('submitting')
      handleModalColse()
      e.preventDefault()
  }
  return (
    <div>
        
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={bookingOpen}
        onClose={handleModalColse}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <form  onSubmit={handleBookingSubmit}>
        <Fade in={bookingOpen}>
          <Box sx={style}>
              <h2>{name}</h2>
            <TextField
            disabled
            sx={{ width:'90%',mb:1 }}
              id="outlined-basic" 
              variant="outlined"
              defaultValue={time}
            />
            <TextField
            sx={{ width:'90%',mb:1 }}
              id="outlined-basic" 
              variant="outlined"
              defaultValue="your name"
            />
            <TextField
             sx={{ width:'90%',mb:1 }}
              id="outlined-basic" 
              variant="outlined"
              defaultValue="your email"
            />
            <TextField 
            sx={{ width:'90%',mb:1 }}
              id="outlined-basic" 
              variant="outlined"
              defaultValue= 'phone number'
            />
            <TextField
            disabled
            sx={{ width:'90%',mb:1 }}
              id="outlined-basic" 
              variant="outlined"
              defaultValue={date.toDateString()}
            />
            <br />
            <Button type="submit"  variant="contained" sx={{ backgroundColor: "#42E5F2", mt:2 }}>Submit</Button>
          </Box>
        </Fade>
        </form>
      </Modal>
    </div>
  );
};

export default BookingModal;
