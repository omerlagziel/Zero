import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

// import { Button } from '../../components/'
import { RootState } from '../../store'
import { decrement, increment } from './slice'
import { RootStackParamList } from '../../navigation/navigation'
import { ReviewCard } from '../../components'

type Props = {
  navigation: BottomTabNavigationProp<RootStackParamList, 'Review'>
}

export default ({ navigation }: Props) => {
  return (
    <View>
      <ReviewCard
        title="John Doe 222222"
        subtitle="2 days ago"
        description="Food was great as always, highly recommend this place! Will definitely come back soon. Only note is to keep the music a little less loud."
        fullscreen
      />
      <TextInput />
    </View>
  )
}
