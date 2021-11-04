import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

import { RootState } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './welcomeSlice'
//import { useGetPokemonByNameQuery } from '../../services/pokemon'

export default () => {
  const state = useSelector((state: RootState) => state.welcome);
  const dispatch = useDispatch();

  dispatch(increment);
  
  //let { data, error, isLoading } = useGetPokemonByNameQuery('pikachu')
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}