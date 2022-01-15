import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@georgedrpg/pannellum-react-next/es/css/video-js.css'
import '@georgedrpg/pannellum-react-next/es/css/pannellum.css'
import '@georgedrpg/pannellum-react-next/es/css/style-textInfo.css'
import Layout from '@layout/Default'
import store from '../app/store'
import { Provider } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { authCheck } from '../features/user/userSlice'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import { useState } from 'react'
import { auth } from '../app/firebase'

function MyApp ({ Component, pageProps }) {
  const [open, setOpen] = useState(true)
  const handleClose = () => {
    setOpen(false)
  }
  onAuthStateChanged(auth, user => {
    if (user) {
      const userData = {
        accessToken: user.accessToken, // access token
        uid: user.uid, // user id
        email: user.email, // user email
        displayName: user.displayName, // user display name
        photoURL: user.photoURL, // user photo url
        phoneNumber: user.phoneNumber // user phone number
      }
      store.dispatch(authCheck(userData))
      setOpen(false)
    } else {
      setOpen(false)
    }
  })

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Backdrop
        sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
    </Provider>
  )
}

export default MyApp
