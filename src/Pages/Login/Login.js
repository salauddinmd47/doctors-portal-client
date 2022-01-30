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
const Login = () => {
  const [loginData, setLoginData] = useState({});
  const handleOnchange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    e.preventDefault();
  };
  const handleLOginSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container>
        <Grid xs={12} md={6} item>
          <Paper sx={{ mt: 10, py: 5 }}>
            <Typography sx={{ color: "#2CDACD" }} variant="h6">
              Please Login
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
              <br />
              <Button
                sx={{ width: "80%", m: 1, backgroundColor: "#2CDACD" }}
                type="submit"
                variant="contained"
              >
                Login
              </Button>
              <NavLink to ="/register">
                  <Button variant="text">New user? Please register</Button>
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

export default Login;
