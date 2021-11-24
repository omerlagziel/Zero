import React from 'react'

import { View, Text, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'

import { store } from './store'
import Reviews from './features/reviews/Reviews'

type Props = {
  children: React.ReactNode
}

const App = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <View style={styles.main}>
        <View style={styles.side} />
        <View style={styles.pageContainer}>{children}</View>
        <View style={styles.side} />
      </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#f1f1f1',
    flexDirection: 'row',
  },
  pageContainer: {
    flex: 2,
  },
  side: {
    flex: 1,
  },
})

export default App
