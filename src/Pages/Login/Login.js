import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  Alert,
  CircularProgress
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import LoginImage from "../../images/login.png";
import useAuth from '../../hooks/useAuth'
const Login = () => {
  const {user , loginUser, loading, authError,googleSignIn} = useAuth()
  const [loginData, setLoginData] = useState({});
  const history = useHistory()
  const location = useLocation()
  const handleOnchange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    e.preventDefault();
  };
  const handleLOginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history)
    e.preventDefault();
  };
  const signInWithGoogle = ()=>{
    googleSignIn(location, history)
  }
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
            <Button
                sx={{ width: "80%", m: 1, backgroundColor: "green" }}
                type="submit"
                variant="contained"
                onClick={signInWithGoogle}
              >
                Google SignIn
              </Button>
            {
              loading && <CircularProgress color="secondary" />}
            {user?.email && <Alert severity="success">Login  successfully</Alert> }
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

export default Login;
