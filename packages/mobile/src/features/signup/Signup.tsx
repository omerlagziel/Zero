import React, { Component, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import { Input, Button } from '../../components'
import { displayName as appDisplayName } from '../../../app.json';

import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { setEmail, setFullName, setPassword, setIsLoading } from './slice'
import { useSignupMutation } from '../../services/api'

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App'

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Signup'>
}

export default ({ navigation }: Props) => {
  const state = useSelector((state: RootState) => state.signup);
  const dispatch = useDispatch();

  if (state.isLoading)
    return <ActivityIndicator />;

  return (
    <View style={styles.container}>
    <Input
      style={styles.input}
      placeholder="Email"
      value={state.email}
      autoCorrect={false}
      onChangeText={(value: string) => dispatch(setEmail(value)) }
    />
    <Input
      style={styles.input}
      placeholder="Full Name"
      value={state.fullName}
      onChangeText={(value: string) => dispatch(setFullName(value))}
    />
    <Input
      style={styles.input}
      secureTextEntry
      placeholder="Password"
      value={state.password}
      autoCorrect={false}
      onChangeText={(value: string) => dispatch(setPassword(value))}
    />

    <Button
        label="Sign up"
        onPress={() => dispatch(useSignupMutation({ email: state.email, fullName: state.fullName, password: state.password }))}
        style={styles.signupButton}
        type={'callForAction'}
      />
    <Text>{state.errorMessage}</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  input: {
  },
  signupButton: {
    marginBottom: 5,
    width: 200
  },
});
