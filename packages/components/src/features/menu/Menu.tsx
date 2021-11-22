import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

// import { Button } from '../../components/'
import { RootState } from '../../store'
import { decrement, increment } from './slice'
import { RootStackParamList } from '../../navigation/navigation'
import { Tag } from '../../components'

type Props = {
  // navigation: BottomTabNavigationProp<RootStackParamList, 'Menu'>
}

/**
 * @param props {@link Props}
 */
export default (props: Props) => {
  const state = useSelector((rootState: RootState) => rootState.menu)
  const dispatch = useDispatch()

  // dispatch(increment);
  // let { data, error, isLoading } = useGetPokemonByNameQuery('pikachu')

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={styles.tags}>
            <Tag>Vegan</Tag>
          </View>
          <Text style={styles.title}>סלט פרנק</Text>
        </View>
        <Text style={styles.description}>סלט הבית עם רוטב אלף האיים</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={styles.tags}>
            <Tag>Vegan</Tag>
          </View>
          <Text style={styles.title}>פסטה רוזריה</Text>
        </View>
        <Text style={styles.description}>פסטה ברוטב פטריות וגבינת מוצרלה</Text>
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
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 7,
  },
  bannerImage: {
    height: 140,
  },
  tags: {
    flexDirection: 'row-reverse',
    direction: 'rtl',
    // marginBottom: 4,
  },
  description: {},
})
