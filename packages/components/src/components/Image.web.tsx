import React, { Component } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  View,
  StyleSheet,
  ImageProps,
  ImageURISource,
  ImageSourcePropType,
} from 'react-native'
import NextImage from 'next/image'

type Props = ImageProps & {}

function isURI(
  toBeDetermined: ImageSourcePropType,
): toBeDetermined is ImageURISource {
  if ((toBeDetermined as ImageURISource).uri) {
    return true
  }
  return false
}

const Image = ({ source, style }: Props) => {
  // ImageProps: onLayout onError onLoad onLoadEnd onLoadStart progressiveRenderingEnabled borderRadius borderTopLeftRadius borderTopRightRadius borderBottomLeftRadius borderBottomRightRadius resizeMode resizeMethod loadingIndicatorSource testID defaultSource style
  // Unsupported next attributes: sizes, unoptimized, priority, loading, lazyBoundary, className, quality, width, height, objectFit, objectPosition, onLoadingComplete, loader, placeholder, blurDataURL
  let src: string | ImageSourcePropType = source

  var styleObj = StyleSheet.flatten([style])
  let width = styleObj.width
  let height = styleObj.height

  if (isURI(source)) {
    src = source.uri || ''
  }

  return (
    <View style={[style, styles.root]}>
      <NextImage src={src} width={width} height={height} />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flexBasis: 'auto',
    overflow: 'hidden',
    zIndex: 0,
  },
})

export default Image
