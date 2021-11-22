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
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { RootState } from '../../store'
import { decrement, increment } from './slice'
import { RootStackParamList } from '../../navigation/navigation'
import { ReviewCard } from '../../components'

type Props = {
  navigation: BottomTabNavigationProp<RootStackParamList, 'Review'>
}

export default ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.reviewContainer}>
        <ReviewCard
          title="John Doe"
          subtitle="2 days ago"
          description="Food was great as always, highly recommend this place! Will definitely come back soon. Only note is to keep the music a little less loud."
          fullscreen
        />
        <ScrollView
          style={styles.replyOptions}
          contentContainerStyle={styles.replyOptionsContainer}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
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
          <TouchableOpacity style={styles.replyOption}>
            <Text style={styles.replyOptionText}>Customize..</Text>
          </TouchableOpacity>
        </ScrollView>
      </ScrollView>

      <TextInput placeholder="Reply.." style={styles.textInput} multiline />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  reviewContainer: {
    // flex: 1,
  },
  textInput: {
    fontSize: 14,
    backgroundColor: 'white',
    padding: 15,
    paddingTop: 15,
    margin: 15,
    borderRadius: 15,
    shadowColor: 'grey',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 0 },
  },
  replyOptionsContainer: {
    backgroundColor: 'white',
  },
  replyOptions: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'white',
  },
  replyOption: {
    flexDirection: 'row',
    backgroundColor: '#0F9D58',
    borderRadius: 8,
    padding: 8,
    marginHorizontal: 5,
  },
  replyOptionText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 12,
  },
})
