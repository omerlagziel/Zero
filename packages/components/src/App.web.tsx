import React from 'react'

import { Text } from 'react-native'
import { Provider } from 'react-redux'

import { store } from './store'
// import { RootStackParamList } from './navigation/navigation'
// import Menu from './features/menu/Menu'
// import Reviews from './features/reviews/Reviews'
import Review from './features/review/Review'

export function App() {
  return (
    <Provider store={store}>
      <Review />
    </Provider>
  )
}
