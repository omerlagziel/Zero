import React from 'react';
import { Image } from 'react-native';
import VectorIcon from 'react-native-vector-icons/FontAwesome';

const Icon = (props) => {
    const { style, name, size, color, source } = props;

    if (name) {
      return (
        <VectorIcon style={style} name={name} size={size || 22} color={color || '#999'} />
      );
    }
    return (
      <Image source={source} style={[style, styles.image]} />
    );
};

const styles = {
  image: {
    height: 13,
    width: 13,
    margin: 1,
  }
};

export { Icon };
