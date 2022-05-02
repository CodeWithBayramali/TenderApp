import * as React from "react";
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
import { signUp } from "../api/userApi";
import { useHistory } from 'react-router-dom'

const theme = createTheme();

export default function SignUp() {
  const fetchRegister = async (userData) => {
     await signUp(userData);
  };
  const history = useHistory()

  const formik = useFormik({
    initialValues: {
      UserName: "",
      Name: "",
      Email: "",
      Password: "",
    },
    onSubmit: (values, { resetForm }) => {
      fetchRegister(values);
      alert("Kayıt Başarılı");
      resetForm();
      history.push("/login")
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
            Sign Up
          </Typography>
          <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              onChange={formik.handleChange("Name")}
              fullWidth
              id="email"
              value={formik.values.Name}
              label="Name Surname"
              name="Name"
              autoFocus
            />
            <TextField
              margin="normal"
              onChange={formik.handleChange("UserName")}
              value={formik.values.UserName}
              required
              fullWidth
              name="UserName"
              label="User Name"
              id="password"
            />

            <TextField
              margin="normal"
              onChange={formik.handleChange("Email")}
              value={formik.values.Email}
              required
              fullWidth
              name="Email"
              label="Email"
              id="password"
              autoComplete="email"
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
