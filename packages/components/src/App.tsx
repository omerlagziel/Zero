import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux'

import { store } from './store'
import { RootStackParamList } from './navigation/navigation'
import Menu from './features/menu/Menu'
import Reviews from './features/reviews/Reviews'

const Stack = createBottomTabNavigator<RootStackParamList>()

export function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Menu">
          <Stack.Screen
            name="Reviews"
            component={Reviews}
            options={{
              // headerTransparent: true,
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="Menu"
            component={Menu}
            options={{
              // headerTransparent: true,
              headerTitleAlign: 'center',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
