import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import useApi from "../../hooks/useApi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import { signInSchema } from "../../validation/Validation";
import MySnackbar from "../../global/MySnackbar";
import { useAuth } from "../../contexts/AuthContext";

export default function SignIn() {
  const { post, data, loading, error } = useApi();
  const { signIn, user } = useAuth();

  const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false);
  const [errorSnackbarMessage, setErrorSnackbarMessage] = useState("");
  // const [selectedRole, setSelectedRole] = useState("parent");

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(`/${user.role}`);
    }
  }, [navigate, user]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInSchema,
    onSubmit: async (values) => {
      let body = {
        email: values.email,
        password: values.password,
      };
      post(`/users/signin`, body);
    },
  });

  useEffect(() => {
    if (data?.message === "success") {
      signIn({ ...data.userdata });
      navigate(`/${data.userdata.role}`);
    }
  }, [data, error, navigate, signIn]);

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
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            error={formik.touched.email && formik.errors.email}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            margin="normal"
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
            }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
