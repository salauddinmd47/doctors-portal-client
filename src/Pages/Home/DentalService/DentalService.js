import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button"
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import sepecialImg from '../../../images/treatment.png'
import Typography from '@mui/material/Typography';
const DentalService = () => {
  return (
    <Container>
      <Box sx={{ width: "100%" , mt:10}}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid sx={{ display:'flex', justifyContent: 'flex-end',mr:3 }}  item xs={12} sm={12} md={6}>
               <Box>
               <img style={{ height:'350px' }} src={sepecialImg} alt="" />
               </Box>
            </Grid>
          <Grid item xs={12} sm={12} md={5} sx={{ textAlign:'left',display:'flex',  alignItems:'center'  }}>
            <Box>
            <Typography sx={{ mb:3 }} variant="h4">
                 Exceptional dental care,<br /> on your terms
             </Typography>
             <Typography sx={{ mb:3 }} variant="b2">
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore repellendus tempora veniam omnis illum quis ullam commodi, quo similique consequuntur? Nostrum error a, placeat exercitationem explicabo vero nam aliquid soluta.
             </Typography>
             <br />
             <Button   variant="contained" sx={{ backgroundColor: "#42E5F2",mt:3 }}>Lear more</Button>
            </Box>
            </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default DentalService;
