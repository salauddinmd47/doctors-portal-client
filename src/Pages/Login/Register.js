import {
  Alert,
    Button,
    CircularProgress,
    Container,
    Grid,
    Paper,
    TextField,
    Typography,
    
  } from "@mui/material";
  import React, { useState } from "react";
  import { NavLink, useHistory } from "react-router-dom";
  import LoginImage from "../../images/login.png";
  import useAuth from '../../hooks/useAuth'
const Register = () => {
    const [loginData, setLoginData] = useState({});
    const {user, registerUser,loading, authError} = useAuth()
    const history = useHistory()
    const handleOnBlur = (e) => {
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
          alert('password did not matched')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
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
            { !loading && <form onSubmit={handleLOginSubmit}>
              <TextField
                sx={{ width: "80%", m: 1 }}
                id="standard-basic"
                label="your name"
                name="name"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: "80%", m: 1 }}
                id="standard-basic"
                label="your email"
                name="email"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: "80%", m: 1 }}
                id="standard-basic"
                label="your password"
                onBlur={handleOnBlur}
                name="password"
                type="password"
                variant="standard"
              />
              <TextField
                sx={{ width: "80%", m: 1 }}
                id="standard-basic"
                label=" Retype your password"
                onBlur={handleOnBlur}
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
                Register
              </Button>
              <NavLink to ="/login">
                  <Button variant="text">Already register? Please login</Button>
              </NavLink>
            </form>}
            {
              loading && <CircularProgress color="secondary" />
            }
            {
              user?.email && <Alert severity="success">User created successfully</Alert> 
            }
            {authError && <Alert severity="error">{authError}</Alert>}
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