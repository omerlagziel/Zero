import React from 'react'

import { Provider } from 'react-redux'
import { Text } from 'react-native'

import { store } from './store'
import { RootStackParamList } from './navigation/navigation'
import Menu from './features/menu/Menu'
import Reviews from './features/reviews/Reviews'
import Review from './features/review/Review'

export function App() {
  return <Text>Main</Text>
}
