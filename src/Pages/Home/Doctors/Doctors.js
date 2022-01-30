import React from 'react';
import doctorPHoto from '../../../images/doctor.png'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';

const Doctors = () => {
    return (
        <Container sx={{ mt:10 }}>
            <Box>
            <Typography sx={{ my:2, color:'#42E5F2' }} variant='h5'>
              OUR DOCTORS
          </Typography>
            </Box>
            <Grid container spacing={{ xs: 1, md:1  }} columns={{ xs: 4, sm: 8, md: 12 }}>
       
       <Grid   item xs={4} sm={4} md={4}>
          <img style={{ height:'300px' }} src={doctorPHoto} alt="" />
          <Typography sx={{ my:2, color:'info.main' }} variant='h5'>
              Dr.Caudi
          </Typography>
       </Grid>
       <Grid   item xs={4} sm={4} md={4}>
          <img style={{ height:'300px' }} src={doctorPHoto} alt="" />
          <Typography sx={{ my:2, color:'info.main' }} variant='h5'>
              Dr.Caudi
          </Typography>
       </Grid>
       <Grid   item xs={4} sm={4} md={4}>
          <img style={{ height:'300px' }} src={doctorPHoto} alt="" />
          <Typography sx={{ my:2, color:'info.main' }} variant='h5'>
              Dr.Caudi
          </Typography>
       </Grid>
       
        
 
   </Grid>
        </Container>
    );
};

export default Doctors;