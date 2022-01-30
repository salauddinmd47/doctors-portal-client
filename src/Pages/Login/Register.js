import {
    Button,
    Container,
    Grid,
    Paper,
    TextField,
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";
  import { NavLink } from "react-router-dom";
  import LoginImage from "../../images/login.png";

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const handleOnchange = (e) => {
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = { ...loginData };
      newLoginData[field] = value;
      console.log(newLoginData)
      setLoginData(newLoginData);
      e.preventDefault();
    };
    const handleLOginSubmit = (e) => {
        if(loginData.password !== loginData.password2){
          console.log('password did not matched')
            return
        }
      e.preventDefault();
    };
    return (
        <Container>
      <Grid container>
        <Grid xs={12} md={6} item>
          <Paper sx={{ mt: 10, py: 5 }}>
            <Typography sx={{ color: "#2CDACD" }} variant="h6">
              Please register
            </Typography>
            <form onSubmit={handleLOginSubmit}>
              <TextField
                sx={{ width: "80%", m: 1 }}
                id="standard-basic"
                label="your email"
                name="email"
                onChange={handleOnchange}
                variant="standard"
              />
              <TextField
                sx={{ width: "80%", m: 1 }}
                id="standard-basic"
                label="your password"
                onChange={handleOnchange}
                name="password"
                type="password"
                variant="standard"
              />
              <TextField
                sx={{ width: "80%", m: 1 }}
                id="standard-basic"
                label=" Retype your password"
                onChange={handleOnchange}
                name="password2"
                type="password"
                variant="standard"
              />
              <br />
              <Button
                sx={{ width: "80%", m: 1, backgroundColor: "#2CDACD" }}
                type="submit"
                variant="contained"
              >
                Login
              </Button>
              <NavLink to ="/login">
                  <Button variant="text">Already register? Please login</Button>
              </NavLink>
            </form>
          </Paper>
        </Grid>
        <Grid xs={12} md={6} item>
          <img style={{ height: "100vh" }} src={LoginImage} alt="" />
        </Grid>
      </Grid>
    </Container>
    );
};

export default Register;