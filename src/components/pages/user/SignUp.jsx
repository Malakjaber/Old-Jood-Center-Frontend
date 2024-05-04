import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import useApi from "../../hooks/useApi";
import { Link, useNavigate } from "react-router-dom";
import { signUpSchema } from "./Validation";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ErrorSnackbar from "./ErrorSnackbar";

export default function SignUp() {
  const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false);
  const [errorSnackbarMessage, setErrorSnackbarMessage] = useState("");

  const { post, data, error } = useApi();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      const body = {
        username: values.firstName + " " + values.lastName,
        email: values.email,
        password: values.password,
        role: "teacher",
      };
      post(`/users/signup`, body);
    },
  });
  useEffect(() => {
    if (data?.sessionId) {
      navigate("/signin");
    }
  }, [data, navigate]);
  useEffect(() => {
    if (error) {
      setErrorSnackbarMessage(error);
      setOpenErrorSnackbar(true);
    }
  }, [error]);

  return (
    <Container component="main" maxWidth="xs">
      <ErrorSnackbar
        content={errorSnackbarMessage}
        open={openErrorSnackbar}
        handleClose={() => {
          setOpenErrorSnackbar(false);
        }}
      />
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
          Sign up
        </Typography>
        <Box
          component={"form"}
          noValidate
          onSubmit={formik.handleSubmit}
          className="w-full mt-3"
        >
          <Grid container spacing={2} className="mb-4">
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={formik.handleChange}
                value={formik.values.firstName}
                onBlur={formik.handleBlur}
                error={formik.touched.firstName && formik.errors.firstName}
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                onBlur={formik.handleBlur}
                error={formik.touched.lastName && formik.errors.lastName}
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                error={formik.touched.email && formik.errors.email}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
                error={formik.touched.password && formik.errors.password}
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign Up
          </Button>
        </Box>
      </Box>
      <Grid container justify="flex-end" className="my-4">
        <Grid item>
          <Box
            component={Link}
            title="Already have an account? Sign in"
            to={"/signin"}
          >
            Already have an account? Sign in
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
