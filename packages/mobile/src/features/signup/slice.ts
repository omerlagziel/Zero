import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { act } from 'react-test-renderer'

export const slice = createSlice({
  name: 'signup',
  initialState: {
    email: '',
    fullName: '',
    password: '',
    isLoading: false,
    errorMessage: '',
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setFullName: (state, action) => {
      state.fullName = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setEmail, setFullName, setPassword, setIsLoading } = slice.actions

export default slice.reducer