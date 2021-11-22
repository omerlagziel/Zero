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

type TagProps = {
  children: React.ReactNode
}

const Tag = (props: TagProps) => {
  const { children } = props
  return (
    <View style={[styles.tag, styles.tagBrown]}>
      <Text>{children}</Text>
    </View>
  )
}

export default ({ navigation }: Props) => {
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
  tag: {
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 6,
    textAlign: 'center',
    color: 'green',
    borderColor: 'green',
    fontSize: 12,
    marginHorizontal: 2,
  },
  tagBrown: {
    color: '#6C3512',
    borderColor: '#6C3512',
  },
  description: {},
})
