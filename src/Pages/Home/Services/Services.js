import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
import Service from "../Service/Service";
const services = [
  {
    name: "Fluride treatment",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet totam, incidunt possimus, esse cum dolores recusandae officiis quo necessitatibus hic eligendi voluptas!",
    img: fluoride,
  },
  {
    name: "Cavity protection",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet totam, incidunt possimus, esse cum dolores recusandae officiis quo necessitatibus hic eligendi voluptas!",
    img: cavity,
  },
  {
    name: "Teeth Whiting",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet totam, incidunt possimus, esse cum dolores recusandae officiis quo necessitatibus hic eligendi voluptas!",
    img: whitening,
  },
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ my:5,  }}>
        <Typography sx={{ color: 'info.main' }} variant="h6" gutterBottom component="div">
           OUR SERVICES 
        </Typography>
        <Typography sx={{ color: 'text.secondary',fontWeight:'600' }} variant="h3" gutterBottom component="div">
          Our We Provide
        </Typography>
      </Box>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <Service service={service} key={service.name}></Service>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
