import React from "react";
import Paper from "@mui/material/Paper";
import { Box, Container, Grid, Typography } from "@mui/material";
import avator3 from "../../../images/people-3.png";
import avator2 from "../../../images/people-2.png";
import avator1 from "../../../images/people-1.png";
import Avatar from "@mui/material/Avatar";
const Testimonial = () => {
  return (
    <Box sx={{ mt: 10 }}>
      <Container>
          <Box sx={{ textAlign:'left', my:2 }}>
              <Typography sx={{ color:'#42E5F2' }} variant="h6">
                  TESTIMONIALS
              </Typography>
              <Typography variant="h4">
                  What's Our Clients <br /> Says
              </Typography>
          </Box>
        <Grid container spacing={3}>
          <Grid md={4} sm={12} xs={12} item>
            <Paper>
            <Paper>
              <Typography sx={{ p:5,textAlign:'justify' }} variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus, vitae! Voluptas nesciunt odio rerum nisi eaque
                aspernatur ducimus repellat commodi blanditiis explicabo nulla
                libero ratione, beatae fugit possimus repellendus
              </Typography>
              <Box sx={{ display:'flex', justifyContent: 'space-start', p:3 , }}>
                <Avatar alt="Remy Sharp" src={avator1} />
                <Box sx={{ textAlign:'left', ml:3 }}>
                  <Typography sx={{ color:'#42E5F2' }} variant="h6">Winston Herry</Typography>
                  <Typography sx={{ color:' grey' }} variant="subtitle1">California</Typography>
                </Box>
              </Box>
            </Paper>
            </Paper>
          </Grid>
          <Grid md={4} sm={12} xs={12} item>
          <Paper>
              <Typography sx={{ p:5,textAlign:'justify' }} variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus, vitae! Voluptas nesciunt odio rerum nisi eaque
                aspernatur ducimus repellat commodi blanditiis explicabo nulla
                libero ratione, beatae fugit possimus repellendus
              </Typography>
              <Box sx={{ display:'flex', justifyContent: 'space-start', p:3 , }}>
                <Avatar alt="Remy Sharp" src={avator2} />
                <Box sx={{ textAlign:'left', ml:3 }}>
                  <Typography sx={{ color:'#42E5F2' }} variant="h6">Winston Herry</Typography>
                  <Typography sx={{ color:'#8B9198' }} variant="subtitle1">California</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid md={4} sm={12} xs={12} item>
            <Paper>
              <Typography sx={{ p:5,textAlign:'justify' }} variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus, vitae! Voluptas nesciunt odio rerum nisi eaque
                aspernatur ducimus repellat commodi blanditiis explicabo nulla
                libero ratione, beatae fugit possimus repellendus
              </Typography>
              <Box sx={{ display:'flex', justifyContent: 'space-start', p:3 , }}>
                <Avatar alt="Remy Sharp" src={avator3} />
                <Box sx={{ textAlign:'left', ml:3 }}>
                  <Typography sx={{ color:'#42E5F2' }} variant="h6">Winston Herry</Typography>
                  <Typography sx={{ color:'#8B9198'}} variant="subtitle1">California</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonial;
