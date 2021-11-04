/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { store } from './store'
import { Provider } from 'react-redux'

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Welcome from './features/welcome/Welcome'

type State = {
  isLoggedIn: boolean,
};

export default class App extends Component<{}, State> {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView>
          <Welcome title={'Welcome!'} />
        </SafeAreaView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    marginTop: 32,
    paddingHorizontal: 24,
  }
});