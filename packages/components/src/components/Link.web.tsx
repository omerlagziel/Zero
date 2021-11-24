import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import NextLink from 'next/link'
import LinkProps from './LinkProps'

export const Link = ({ href, children }: LinkProps) => {
  return (
    <TouchableOpacity>
      <NextLink href={href}>
        <a style={{ textDecoration: 'initial' }}>{children}</a>
      </NextLink>
    </TouchableOpacity>
  )
}
