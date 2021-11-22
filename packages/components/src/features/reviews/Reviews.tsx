import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

// import { Button } from '../../components/'
import { RootState } from '../../store'
import { decrement, increment } from './slice'
import { RootStackParamList } from '../../navigation/navigation'
import { Tag } from '../../components'

type StarProps = {
  stars: 1 | 2 | 3 | 4 | 5
}

const Stars = ({ stars }: StarProps) => {
  return (
    <View style={styles.starsContainer}>
      <Text style={styles.stars}>{'★'.repeat(stars)}</Text>
      <Text style={[styles.stars, styles.starsGrey]}>
        {'★'.repeat(5 - stars)}
      </Text>
    </View>
  )
}

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Reviews'>
}

/**
 * @param props {@link Props}
 */
export default ({ navigation }: Props) => {
  const state = useSelector((rootState: RootState) => rootState.reviews)
  const dispatch = useDispatch()

  // dispatch(increment);
  // let { data, error, isLoading } = useGetPokemonByNameQuery('pikachu')

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.profilePicContainer}>
          <Image
            source={{
              uri:
                'https://www.personality-insights.com/wp-content/uploads/2017/12/default-profile-pic-e1513291410505.jpg',
            }}
            style={styles.profilePic}
          />
          <Image source={require('./facebook.png')} style={styles.socialIcon} />
        </View>
        <View style={styles.titleContainer}>
          <View style={styles.titleHead}>
            <Text style={styles.title}>John Doe</Text>
            <Stars stars={4} />
          </View>
          <Text style={styles.subtitle}>2 days ago</Text>
        </View>
      </View>
      <Text>Not great</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // flexDirection: 'row',
  },
  cardHeader: {
    flexDirection: 'row',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  socialIcon: {
    width: 20,
    height: 20,
    borderRadius: 20,
    marginLeft: -15,
  },
  profilePicContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 17,
  },
  subtitle: {
    color: 'grey',
    fontSize: 15,
  },
  starsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 5,
  },
  stars: {
    fontSize: 11,
    color: '#F4B400',
  },
  starsGrey: {
    color: '#D3D3D3',
  },
  titleContainer: {
    paddingHorizontal: 7,
    marginTop: 3,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  titleHead: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})
