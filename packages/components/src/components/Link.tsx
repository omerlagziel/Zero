import React, { Component } from 'react'
import { useLinkTo } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'
import LinkProps from './LinkProps'

// Note: There's a bug in android that interferes with deep linking which we
// use with useLinkTo. See https://github.com/facebook/react-native/issues/25675
// and https://reactnavigation.org/docs/configuring-links

export const Link = ({ href, children }: LinkProps) => {
  const linkTo = useLinkTo()
  return (
    <TouchableOpacity onPress={() => linkTo(href)}>{children}</TouchableOpacity>
  )
}
