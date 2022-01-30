import React from 'react';
import Box from '@mui/material/Box'; 
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import chairBG from '../../../images/bg.png'
import { Button, Container, Typography } from '@mui/material';
const HomeBanner = () => {
    const bannerBg={
        background:`url(${chairBG})`,
        
        backgroundColor:'rgba(58, 65, 75,0.2)',
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundBlendMode: 'multiply',
        marginTop: '-32px;'
    }
    return (
       <Box style={bannerBg}>
            <Container   >
        <Grid container  >
          <Grid sx={{ textAlign:"left",  height:"600",display:'flex',alignItems:'center' }}  xs={12}  md={6}>
           <Box  sx={{ textAlign:"left",}}>
           <Typography variant='h3'>
                Your New smile <br /> starts here
            </Typography>
            <Typography sx={{ my:3 }} variant='body2'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt minus a sapiente commodi fugiat ipsam perferendis tenetur quibusdam suscipit asperiores.
            </Typography>
            <Button variant="contained" sx={{ backgroundColor: "#42E5F2" }} variant="contained">Make appointment</Button>
           </Box>
          </Grid>
          <Grid sx={{ textAlign:"left",  height:500,display:'flex',alignItems:'center',justifyContent: 'flex-end' }}  xs={12} md={6}>
            <img style={{ width:'500px' }} src={chair} alt="" />
          </Grid> 
        </Grid>
      </Container>
       </Box>
    );
};

export default HomeBanner;