import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

import { RootState } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './welcomeSlice'
import { useGetPokemonByNameQuery } from '../../services/pokemon'

type WelcomeProps = {
  title: string
};

export default ({ title }: WelcomeProps) => {
  const state = useSelector((state: RootState) => state.welcome);
  const dispatch = useDispatch();

  dispatch(increment);
  
  let { data, error, isLoading } = useGetPokemonByNameQuery('pikachu')
  return (
    <View>
        <Text>{title}</Text>
        <Text>{data?.name}</Text>
        <Image source={{uri: data?.sprites.front_default || ''}}
          style={{ height: 250, width: 250 }} />
    </View>
  );
}