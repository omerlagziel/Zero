import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider } from 'react-redux'
import { store } from './store'

import Welcome from './features/welcome/Welcome'
import Signup from './features/signup/Signup'

// Parameters for each screen
export type RootStackParamList = {
  Welcome: undefined
  Signup: undefined
};
const Stack = createNativeStackNavigator<RootStackParamList>();

// Base of app
export default () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);