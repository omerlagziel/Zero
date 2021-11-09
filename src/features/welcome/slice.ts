import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'welcome',
  initialState: {
    value: 'test',
  },
  reducers: {
    increment: (state) => {
      state.value = 'test-increment'
    },
    decrement: (state) => {
      state.value = 'test-decrement'
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = slice.actions

export default slice.reducer