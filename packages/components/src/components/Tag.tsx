import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

type Props = {
  children: React.ReactNode
}

/**
 * @param props {@link Props}
 */
export const Tag = (props: Props) => {
  const { children } = props
  return (
    <View style={[styles.tag, styles.tagBrown]}>
      <Text>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  tags: {
    flexDirection: 'row-reverse',
    direction: 'rtl',
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
})
