import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux'

import { store } from './store'
import { RootStackParamList } from './navigation/navigation'
import Menu from './features/menu/Menu'

const Stack = createNativeStackNavigator<RootStackParamList>()

export function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Menu">
          <Stack.Screen
            name="Menu"
            component={Menu}
            options={{
              // headerTransparent: true,
              headerBlurEffect: 'prominent',
              headerTitleAlign: 'center',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
