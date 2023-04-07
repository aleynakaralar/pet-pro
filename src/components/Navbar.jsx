import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import logo from "../assests/logo.jpeg";

export default function Navbar() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };
  const handleAbout = () => {
    navigate("/aboutus/");
  };
  const handleAnimalMate = () => {
    navigate("/animalMate");
  };
  const handleContact = () => {
    navigate("/contact");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <Grid container spacing={2}>
      <AppBar position="static" color="warning">
        <Grid item m={5}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box component="img" sx={{ height: 100 }} alt="Logo" src={logo} />
            <Box display="flex" justifyContent="center">
              <Typography
                variant="h6"
                component="div"
                onClick={handleHome}
                px={2}
              >
                Home
              </Typography>
              <Typography
                variant="h6"
                component="div"
                onClick={handleAbout}
                px={2}
              >
                About Us
              </Typography>
              <Typography
                variant="h6"
                component="div"
                onClick={handleAnimalMate}
                px={2}
              >
                Animal Mate
              </Typography>
              <Typography
                variant="h6"
                component="div"
                onClick={handleContact}
                px={2}
              >
                Contact
              </Typography>
              <Typography
                variant="h6"
                component="div"
                onClick={handleLogin}
                px={2}
              >
                Login
              </Typography>
              <Typography
                variant="h6"
                component="div"
                onClick={handleSignup}
                px={2}
              >
                Sign Up
              </Typography>
            </Box>
          </Box>
        </Grid>
      </AppBar>
    </Grid>
  );
}
