import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  FormControl,
  Grid,
  InputLabel,
  NativeSelect,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import useApi from "../../hooks/useApi";
import { Link, useNavigate } from "react-router-dom";
import { signUpSchema } from "../../validation/Validation";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import MySnackbar from "../../global/MySnackbar";
import { useAuth } from "../../contexts/AuthContext";

export default function SignUp() {
  const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false);
  const [errorSnackbarMessage, setErrorSnackbarMessage] = useState("");
  const [role, setRole] = useState("parent");

  const { post, data, error } = useApi();
  const { user } = useAuth();

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      id: "",
      password: "",
      role: "parent",
    },
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      const body = {
        username: values.firstName + " " + values.lastName,
        email: values.email,
        id: values.id,
        password: values.password,
        role: values.role,
      };
      post(`/users/signup`, body);
    },
  });

  useEffect(() => {
    if (user) {
      navigate(`/${user.role}`);
    }
  }, [navigate, user]);

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
      <MySnackbar
        severity="error"
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
            <FormControl sx={{ mt: "1rem", pl: "1rem" }} fullWidth>
              <InputLabel
                sx={{ fontSize: "1.2rem", pl: "1.2rem" }}
                variant="standard"
                htmlFor="role-select"
              >
                Sign up as
              </InputLabel>
              <NativeSelect
                onChange={(event) => {
                  setRole(event.target.value);
                  formik.handleChange(event);
                }}
                value={formik.values.role}
                inputProps={{
                  name: "role",
                  id: "role-select",
                }}
              >
                <option value={"parent"}>Parent</option>
                <option value={"teacher"}>Teacher</option>
                <option value={"co_manager"}>Co-Manager</option>
                <option value={"manager"}>Manager</option>
              </NativeSelect>
            </FormControl>
            {role === "parent" ? (
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="id"
                  label="ID"
                  name="id"
                  autoComplete="id"
                  onChange={formik.handleChange}
                  value={formik.values.id}
                  onBlur={formik.handleBlur}
                  error={formik.touched.id && formik.errors.id}
                  helperText={formik.touched.id && formik.errors.id}
                />
              </Grid>
            ) : (
              ""
            )}
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
