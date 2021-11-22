import React from 'react'

import { Provider } from 'react-redux'

import { store } from './store'
import { RootStackParamList } from './navigation/navigation'
import Menu from './features/menu/Menu'
import Reviews from './features/reviews/Reviews'
import Review from './features/review/Review'

export function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={Tabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Review" component={Review} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
