import { Box, Typography,Button } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";
 import chairbg from '../../../images/chair2.jpg'
const Contact = () => {
    const contactBg ={
        background:`url(${chairbg})`,
        backgroundColor:'rgba(58, 65, 75,0.900)',
    backgroundBlendMode: 'multiply',
    padding:'30px  0'
    }
  return (
    <Box style={contactBg} sx={{ my:5 }}>
      <Box sx={{ my:5 }}>
        <Typography sx={{ color: "#42E5F2" }} variant="h5">
          {" "}
          CONTACT US{" "}
        </Typography>
        <Typography variant="h4">Always Connect With Us</Typography>
      </Box>
      <Box >
        <TextField
        sx={{ width:2/4 ,backgroundColor:'white',borderRadius: 1 }}
          id="outlined-password-input"
          label="email address"
          type="email"
          autoComplete="current-password"
        />
        <br />
        <TextField
        sx={{ width:2/4, my:3,backgroundColor:'white',borderRadius: 1 }}
          id="outlined-password-input"
          label="Subject"
          type="text"
          autoComplete="current-password"
        />
        <br />
        <TextField
        sx={{ width:2/4 ,backgroundColor:'white',borderRadius: 1, }}
          id="outlined-password-input"
          label="Subject"
          multiline
          rows={3}
          autoComplete="current-password"
        />
        <br />
        <Button variant="contained" sx={{ backgroundColor: "#42E5F2",mt:2, px:3 }} variant="contained">SUBMIT</Button>
         
      </Box>
    </Box>
  );
};

export default Contact;
