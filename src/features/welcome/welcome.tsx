import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import { RootState } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './welcomeSlice'

type WelcomeProps = {
  title: string
};

export default ({ title }: WelcomeProps) => {
  const state = useSelector((state: RootState) => state.welcome);
  const dispatch = useDispatch();

  dispatch(increment);
  
  console.log(state);
  return (
    <View>
        <Text>{title}</Text>
        <Text>{state.value}</Text>
    </View>
  );
}