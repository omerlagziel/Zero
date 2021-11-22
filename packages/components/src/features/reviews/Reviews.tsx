import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

// import { Button } from '../../components/'
import { RootState } from '../../store'
import { decrement, increment } from './slice'
import { RootStackParamList } from '../../navigation/navigation'
import { ReviewCard } from '../../components'

type Props = {
  navigation: BottomTabNavigationProp<RootStackParamList, 'Reviews'>
}

export default ({ navigation }: Props) => {
  return (
    <ReviewCard
      title="John Doe"
      subtitle="2 days ago"
      description="Food was great as always, highly recommend this place! Will definitely come back soon. Only note is to keep the music a little less loud."
      onPress={(e: GestureResponderEvent) => navigation.navigate('Review')}
    />
  )
}