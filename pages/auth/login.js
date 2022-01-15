import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider
} from 'firebase/auth'
import { useRouter } from 'next/dist/client/router'
import CircularProgress from '@mui/material/CircularProgress'
import Alert from '@mui/material/Alert'
import Image from 'next/image'
import { auth } from '@app/firebase'

function Copyright (props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href='/'>
        Reelhomes
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const theme = createTheme()

export default function SignIn () {
  const provider = new GoogleAuthProvider()
  const router = useRouter()
  const [loader, setLoader] = useState(null)
  const [error, setError] = useState(null)
  const handleSubmit = event => {
    setLoader(true)
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log(data.get('email').length)
    if (data.get('email').length < 1 && data.get('password').length < 1) {
      setError('Credentials are required')
      setLoader(false)
    } else {
      signInWithEmailAndPassword(auth, data.get('email'), data.get('password'))
        .then(userCredential => {
          setError(null)
          setLoader(false)
          console.clear()
          router.push('/')
        })
        .catch(error => {
          setError(error.code)
          setLoader(false)
        })
    }
  }
  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        router.push('/')
      })
      .catch(error => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.email
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error)
        // ...
      })
  }

  return (
    <section className='vh-100 d-flex align-items-center'>
      <ThemeProvider theme={theme}>
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#0DACE6' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Login
            </Typography>
            {error && (
              <Alert severity='error' className='mt-2'>
                {error}
              </Alert>
            )}
            <Box
              component='form'
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
              />
              <TextField
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
              />
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2, bgcolor: '#0DACE6' }}
              >
                Sign In
                {loader && (
                  <CircularProgress
                    color='inherit'
                    className='ms-3'
                    size='20px'
                  />
                )}
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href='#' variant='body2'>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href='/auth/sign-up' variant='body2'>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              ;
              <Grid container justifyContent='center'>
                <Button>
                  <Image
                    src={'/google.png'}
                    alt='google'
                    width={262}
                    height={72}
                    onClick={() => googleSignIn()}
                    className='mt-3'
                  />
                </Button>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </section>
  )
}
