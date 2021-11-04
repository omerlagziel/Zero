import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface WelcomeState {
  value: string
}

const initialState: WelcomeState = {
  value: 'test',
}

export const welcomeSlice = createSlice({
  name: 'welcome',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = 'test-increment'
    },
    decrement: (state) => {
      state.value = 'test-decrement'
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = welcomeSlice.actions

export default welcomeSlice.reducer