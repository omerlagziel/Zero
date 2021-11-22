/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

type ReviewState = {
  test: string
}

const initialState: ReviewState = {
  test: '',
}

export const slice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    increment: (state: ReviewState) => {
      state.test = 'test-increment'
    },
    decrement: (state: ReviewState) => {
      state.test = 'test-decrement'
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = slice.actions

export default slice.reducer
