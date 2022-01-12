import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@georgedrpg/pannellum-react-next/es/css/video-js.css'
import '@georgedrpg/pannellum-react-next/es/css/pannellum.css'
import '@georgedrpg/pannellum-react-next/es/css/style-textInfo.css'
import Layout from '@layout/Default'
import store from '../app/store'
import { Provider } from 'react-redux'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { authCheck } from '../features/user/userSlice'
import { auth } from '../app/firebase'

function MyApp ({ Component, pageProps }) {
  const auth = getAuth()
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
    } else {
    }
  })

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
