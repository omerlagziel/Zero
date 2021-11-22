import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native'
import { Stars } from '.'

const cardHeaderHeight = 50

type Props = {
  title: string
  subtitle: string
  description: string
  onPress?: (event: GestureResponderEvent) => void | undefined
  fullscreen?: boolean
}

/**
 * @param props {@link Props}
 */
export const ReviewCard = ({
  title,
  subtitle,
  description,
  onPress,
  fullscreen,
}: Props) => {
  const reviewCard = (
    <View style={styles.card}>
      <View>
        <View style={styles.profilePicContainer}>
          <Image
            source={{
              uri:
                'https://www.personality-insights.com/wp-content/uploads/2017/12/default-profile-pic-e1513291410505.jpg',
            }}
            style={styles.profilePic}
          />
          <Image
            source={require('../../assets/facebook.png')}
            style={styles.socialIcon}
          />
        </View>
      </View>
      <View style={styles.altSideContainer}>
        <View style={styles.titleContainer}>
          <View style={styles.titleHead}>
            <Text style={styles.title}>{title}</Text>
            <Stars stars={4} />
          </View>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <Text
          style={styles.description}
          ellipsizeMode="tail"
          numberOfLines={fullscreen ? undefined : 2}
        >
          {description}
        </Text>
      </View>
    </View>
  )

  if (onPress === undefined) {
    return reviewCard
  }

  return <TouchableOpacity onPress={onPress}>{reviewCard}</TouchableOpacity>
}

ReviewCard.defaultProps = {
  onPress: undefined,
  fullscreen: false,
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 15,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // flexDirection: 'row',
  },
  profilePic: {
    width: cardHeaderHeight,
    height: cardHeaderHeight,
    borderRadius: cardHeaderHeight,
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
    // marginTop: 3,
    height: cardHeaderHeight,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  titleHead: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  description: {
    marginTop: 10,
  },
  altSideContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 7,
  },
})
