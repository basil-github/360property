import { createSlice } from '@reduxjs/toolkit'

let initialState = {
  accessToken: null, // access token
  uid: null, // user id
  email: null, // user email
  displayName: null, // user display name
  photoURL: null, // user photo url
  phoneNumber: null // user phone number
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser: state => {
      state.value += 1
    },
    signIn: state => {
      state.value -= 1
    },
    authCheck: (state, action) => {
      state.accessToken = action.payload.accessToken
      state.uid = action.payload.uid
      state.email = action.payload.email
      state.displayName = action.payload.displayName
      state.photoURL = action.payload.photoURL
      state.phoneNumber = action.payload.phoneNumber
    }
  }
})
export const { createUser, signIn, authCheck } = userSlice.actions

export default userSlice.reducer
