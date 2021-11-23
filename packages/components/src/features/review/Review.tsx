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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { RootState } from '../../store'
import { decrement, increment } from './slice'
import { RootStackParamList } from '../../navigation/navigation'
import { ReviewCard } from '../../components'

type Props = {
  navigation?: BottomTabNavigationProp<RootStackParamList, 'Review'> | undefined
}

const Review = ({ navigation }: Props) => {
  // return (
  //   <View style={{ flex: 1 }}>
  //     <View style={{ backgroundColor: 'blue', flex: 1 }}>
  //       <Text>geg</Text>
  //     </View>
  //     <View style={{ backgroundColor: 'red', height: 300 }}></View>
  //   </View>
  // )
  return (
    <View style={styles.container}>
      <View style={styles.reviewContainer}>
        <ScrollView>
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
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>View on Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Dismiss</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TextInput placeholder="Reply.." style={styles.textInput} multiline />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  reviewContainer: {},
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
  buttons: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    flex: 1,
    alignItems: 'center',
    borderColor: '#f1f1f1',
    margin: 2,
    marginLeft: 0,
  },
  buttonText: {
    color: 'grey',
  },
})

export default Review
