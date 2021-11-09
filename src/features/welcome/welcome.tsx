import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { Button } from '../../components/Button'
import { displayName as appDisplayName } from '../../../app.json';

import { RootState } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './slice'

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App'


type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Welcome'>
}

export default ({ navigation }: Props) => {
  const state = useSelector((state: RootState) => state.welcome);
  const dispatch = useDispatch();

  //dispatch(increment);
  
  //let { data, error, isLoading } = useGetPokemonByNameQuery('pikachu')
  return (
    <View style={styles.container}>
    <View />
    <View style={styles.headerContainer}>
      <Text style={styles.title}>{appDisplayName}</Text>
      <Text style={styles.subtitle}>{"The app that does everything"}</Text>
    </View>
    <View style={styles.bodyContainer}>
      <Button
        label="Sign up"
        onPress={() => navigation.navigate('Signup')}
        style={styles.signupButton}
        type={'callForAction'}
      />
      {/* <Button
        label="Continue with Facebook"
        //onPress={this.pushFacebook.bind(this)}
        style={styles.facebookButton}
        type={'callForAction'}
        textColor='#FFF'
      /> */}
      <TouchableOpacity onPress={() => 0}>
       <Text style={{ fontSize: 12, padding: 5 }}>I Already have an account</Text>
      </TouchableOpacity>
    </View>
    <View />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContainer: {
    alignItems: 'center',
  },
  bodyContainer: {
    alignItems: 'center',
  },
  title: {
    color: '#000',
    fontSize: 43,
    fontWeight: '500'
  },
  subtitle: {
    fontSize: 16,
  },
  signupButton: {
    marginBottom: 5,
    width: 200
  },
  facebookButton: {
    marginBottom: 5,
    backgroundColor: '#3b5998',
    width: 200
  }
});
