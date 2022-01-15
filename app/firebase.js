import { initializeApp } from 'firebase/app'
import { getAuth, signOut } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyA27ZGMhMTMGJh-7gIkVqMS0xtDzOZHvak',
  authDomain: 'auth-54c2d.firebaseapp.com',
  projectId: 'auth-54c2d',
  storageBucket: 'auth-54c2d.appspot.com',
  messagingSenderId: '748223087427',
  appId: '1:748223087427:web:cc449f3f48ee841a8525f6'
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth, signOut }
