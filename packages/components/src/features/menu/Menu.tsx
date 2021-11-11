import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

// import { Button } from '../../components/'
import { RootState } from '../../store'
import { decrement, increment } from './slice'
import { RootStackParamList } from '../../navigation'

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Menu'>
}

export default ({ navigation }: Props) => {
  const state = useSelector((rootState: RootState) => rootState.menu)
  const dispatch = useDispatch()

  // dispatch(increment);
  // let { data, error, isLoading } = useGetPokemonByNameQuery('pikachu')

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => 0}>
        <Text>I Already have an account</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
