import React from 'react'

import { View, Text, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'

import { store } from './store'
import Reviews from './features/reviews/Reviews'
import { useMediaQuery } from 'react-responsive'

type Props = {
  children: React.ReactNode
}

const App = ({ children }: Props) => {
  const isMobile = useMediaQuery({ maxWidth: 900 })

  return (
    <Provider store={store}>
      <View style={[styles.main, isMobile ? mobileStyles.main : {}]}>
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
    height: '100vh',
  },
  pageContainer: {
    flex: 2,
  },
  side: {
    flex: 1,
  },
})

const mobileStyles = StyleSheet.create({
  main: {
    flexDirection: 'column',
  },
})

export default App
