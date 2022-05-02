import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useFormik } from "formik";
import { signIn } from "../api/userApi";
import { useHistory } from "react-router-dom";
import Alert from "@mui/material/Alert";
import axios from "axios";


const theme = createTheme();

export default function SignIn({props}) {
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState();

  const formik = useFormik({
    initialValues: {
      Email: "",
      Password: "",
    },
    onSubmit: async (values, { resetForm }) => {
      await axios.post("http://localhost:5000/user/login",values).then(function(data){
        if(data.status === 200){
          localStorage.setItem("user",JSON.stringify(data))
          history.replace("/")
          setErrorMessage(null)
        }
      }
      ).catch(err=> setErrorMessage(err.response.data))
      resetForm();
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
            {errorMessage && <Alert severity="error">{errorMessage?.message}</Alert>}

            <TextField
              margin="normal"
              required
              onChange={formik.handleChange("Email")}
              fullWidth
              id="email"
              value={formik.values.Email}
              label="Email Address"
              name="Email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              onChange={formik.handleChange("Password")}
              value={formik.values.Password}
              required
              fullWidth
              name="Password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
