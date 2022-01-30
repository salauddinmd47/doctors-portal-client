import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import doctorIMg from "../../../images/doctor.png";
import appointmentBg from "../../../images/appointment-bg.png";

const AppointmentBanner = () => {
  const appointmentStyle = {
    background: `url(${appointmentBg})`,
    backgroundPosition: "center",
    marginTop: "175px",
    backgroundColor:'rgba(58, 65, 75,0.8)',
    backgroundBlendMode: 'multiply',
  };
  return (
    <Box style={appointmentStyle} sx={{ flexGrow: 1,p:5, height:'100%' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} >
          <img
            style={{ height: "500px", marginTop: "-150px" }}
            src={doctorIMg}
            alt=""
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ display:'flex',justifyContent: 'flex-start',alignItems: 'center',textAlign:'left' }}>
          <Box>
            <Typography sx={{ color: "#42E5F2",mb:3 }} variant="h6">
              Appointment
            </Typography>
            <Typography
              sx={{ color: "white", fontSize: "40px", fontWeight: "600" }}
              variant="h4"
            >
              Make an appointment today
            </Typography>
            <Typography sx={{ my:4 }} variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iusto
              optio sint, aliquid expedita sunt temporibus beatae minima eos
              modi.
            </Typography>
            <Button variant="contained" sx={{ backgroundColor: "#42E5F2" }}>
              Learn more
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;
