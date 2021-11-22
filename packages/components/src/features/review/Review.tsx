import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native'
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
        title="John Doe"
        subtitle="2 days ago"
        description="Food was great as always, highly recommend this place! Will definitely come back soon. Only note is to keep the music a little less loud."
        fullscreen
      />
      <ScrollView style={styles.replyOptions} horizontal>
        <TouchableOpacity style={styles.replyOption}>
          <Text style={styles.replyOptionText}>Thank you John!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.replyOption}>
          <Text style={styles.replyOptionText}>Thanks John!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.replyOption}>
          <Text style={styles.replyOptionText}>Many thanks John!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.replyOption}>
          <Text style={styles.replyOptionText}>Appreciate it John!</Text>
        </TouchableOpacity>
      </ScrollView>
      <TextInput placeholder="Reply.." style={styles.textInput} multiline />
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 14,
    backgroundColor: 'white',
    padding: 15,
  },
  replyOptions: {
    flexDirection: 'row',
    padding: 15,
  },
  replyOption: {
    flexDirection: 'row',
    backgroundColor: '#A9A9A9',
    borderRadius: 8,
    padding: 8,
    marginHorizontal: 5,
  },
  replyOptionText: {
    fontWeight: 'bold',
    color: 'white',
  },
})
