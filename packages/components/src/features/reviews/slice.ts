/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

type ReviewsState = {
  test: string
}

const initialState: ReviewsState = {
  test: '',
}

export const slice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    increment: (state: ReviewsState) => {
      state.test = 'test-increment'
    },
    decrement: (state: ReviewsState) => {
      state.test = 'test-decrement'
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = slice.actions

export default slice.reducer
