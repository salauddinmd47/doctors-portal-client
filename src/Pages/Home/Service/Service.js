import { Grid } from "@mui/material";
import React from "react";
import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent'; 
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
const Service = ({service}) => {
     const {name, description, img} = service
      
  return ( 
      <Grid item xs={4} sm={4} md={4}>
      <Card sx={{ minWidth: 275,border: 0,boxShadow: 0 }}>
      <CardContent>
      <CardMedia
        component="img"
        style={{ width:'auto',height:'100px', margin: '0 auto'}}
        image= {img}
        alt="green iguana"
      /> 
        <Typography sx={{ my:3 }} variant="h5" component="div">
          {name}
        </Typography> 
        <Typography variant="body1"> 
           {description}
        </Typography>
      </CardContent> 
    </Card>
      </Grid>
    
  );
};

export default Service;
