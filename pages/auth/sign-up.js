import React, { useEffect, useState } from "react";
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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/dist/client/router";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import { auth } from "@app/firebase";
import Image from "next/image";
import GoogleButton from "react-google-button";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        Reelhomes
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const provider = new GoogleAuthProvider();
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const handleSubmit = (event) => {
    setLoader(true);
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get("password") != data.get("conform-password")) {
      setError("Passwords do not match");
      setLoader(false);
    } else {
      createUserWithEmailAndPassword(
        auth,
        data.get("email"),
        data.get("password")
      )
        .then((userCredential) => {
          setError(null);
          setLoader(false);
          console.clear();
          router.push("/");
        })
        .catch((error) => {
          setError(error.code);
          setLoader(false);
        });
    }
  };
  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        router.push("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <section className="vh-100 d-flex align-items-center">
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
            <Avatar sx={{ m: 1, bgcolor: "#0DACE6" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            {error && (
              <Alert severity="error" className="mt-2">
                {error}
              </Alert>
            )}
            <Box
              component="form"
              onSubmit={handleSubmit}
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
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="conform-password"
                label="Conform Password"
                type="password"
                id="conform-password"
                autoComplete="current-conform-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: "#0DACE6" }}
              >
                Sign In
                {loader && (
                  <CircularProgress
                    color="inherit"
                    className="ms-3"
                    size="20px"
                  />
                )}
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/auth/login" variant="body2">
                    {"Already have an account? Login"}
                  </Link>
                </Grid>
              </Grid>
              <Grid container justifyContent="center" className="pt-3">
                <GoogleButton onClick={() => googleSignIn()} />
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </section>
  );
}
