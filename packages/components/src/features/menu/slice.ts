/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

type MenuState = {
  test: string
}

const initialState: MenuState = {
  test: '',
}

export const slice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    increment: (state: MenuState) => {
      state.test = 'test-increment'
    },
    decrement: (state: MenuState) => {
      state.test = 'test-decrement'
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = slice.actions

export default slice.reducer
