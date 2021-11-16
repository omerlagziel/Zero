import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

// import { Button } from '../../components/'
import { RootState } from '../../store'
import { decrement, increment } from './slice'
import { RootStackParamList } from '../../navigation/navigation'

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
      <Image
        style={styles.bannerImage}
        source={{
          uri:
            'https://image.freepik.com/free-photo/chinese-food-vegan-stir-fry-noodles-with-red-cabbage-carrot-bowl-black-wooden-background-asian-cuisine-meal-banner-top-view_2829-8181.jpg',
        }}
      />
      <View style={styles.card}>
        <Text style={styles.title}>Chicken sandwich</Text>
      </View>
      <View style={styles.card}>
        <Text>test</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // flexDirection: 'column',
  },
  card: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
  },
  bannerImage: {
    height: 140,
  },
})
