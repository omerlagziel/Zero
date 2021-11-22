import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

type StarProps = {
  stars: 1 | 2 | 3 | 4 | 5
}

export const Stars = ({ stars }: StarProps) => {
  return (
    <View style={styles.starsContainer}>
      <Text style={styles.stars}>{'★'.repeat(stars)}</Text>
      <Text style={[styles.stars, styles.starsGrey]}>
        {'★'.repeat(5 - stars)}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
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
})
