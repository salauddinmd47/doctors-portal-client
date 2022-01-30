import { Box } from "@mui/system";
import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Button, Container, Grid, Typography } from "@mui/material";
import footerBackground from '../../../images/footer-bg.png'
const Footer = () => {
    const footerBg = {
        background:`url(${footerBackground})`
    }
  return (
    <Box style={footerBg} >
      <Container>
        <Grid container>
          <Grid sm={6} md={3} items > 
            <ListItem sx={{ mt:4 }}>
              <ListItemText>Emergence dental care</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>checkup</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Treatment personal disease</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Toot extraction</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Clean up</ListItemText>
            </ListItem>
          </Grid>
          <Grid sm={6} md={3} items>
              <Typography sx={{ color:'#42E5F2',textAlign:'left',pl:2 }} variant="h5">
                  Services
              </Typography>
          <ListItem>
              <ListItemText>Emergence dental care</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>checkup</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Treatment personal disease</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Toot extraction</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Clean up</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Clean up</ListItemText>
            </ListItem>
          </Grid>
          <Grid sm={6} md={3} items>
          <Typography sx={{ color:'#42E5F2', textAlign:'left',pl:2 }} variant="h5">
                  Our Health
              </Typography>
          <ListItem>
              <ListItemText>Emergence dental care</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>checkup</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Treatment personal disease</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Toot extraction</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Clean up</ListItemText>
            </ListItem>
          </Grid>
        
        <Grid sm={6} md={3} items>
        <Typography sx={{ color:'#42E5F2',textAlign:'left',pl:2 }} variant="h5">
                 Our address
              </Typography>
          <ListItem>
              <ListItemText>New york -101010 husdon yard us.</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Call now</ListItemText>
              
            </ListItem>
            <ListItem>
            <Button variant="contained" sx={{ backgroundColor: "#42E5F2" }} variant="contained">+1-1234546545</Button>
            </ListItem>
            <ListItem>
              <ListItemText>Toot extraction</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Clean up</ListItemText>
            </ListItem>
          </Grid>
        </Grid>
        <Box>
            <Typography sx={{ mt:3 }} variant="b2">
                Copyright 2020  all rights reserve
            </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
