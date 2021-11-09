import React from 'react';
import { Text, Image, View } from 'react-native';
import { CardSection } from './CardSection';

const CardHeader = (props) => {
  const { cardHeader, title, subtitle, image, imageContainer, titlesContainer } = styles;

  const renderImage = () => {
    if (!props.image.uri) {
      return <View style={[image, { backgroundColor: '#F5F5F5' }]} />;
    }
    return <Image style={image} source={props.image} />;
  };

  const renderSubtitle = () => {
    if (props.renderSubtitle) {
      return props.renderSubtitle(subtitle);
    }

    return (
      <Text style={subtitle}>
        {props.subtitle}
      </Text>
    );
  };

  return (
    <CardSection style={[cardHeader, props.style]}>
      <View style={imageContainer}>
        {renderImage()}
      </View>
      <View style={titlesContainer}>
        <Text style={title}>
          {props.title}
        </Text>
        {renderSubtitle()}
      </View>
    </CardSection>
  );
};

const styles = {
  cardHeader: {
    backgroundColor: '#fff',
  },
  titlesContainer: {
    justifyContent: 'center'
  },
  title: {
    color: '#424242',
    fontSize: 13,
    marginBottom: -2
  },
  subtitle: {
    color: '#757575',
    fontSize: 12
  },
  imageContainer: {
    justifyContent: 'center',
    paddingRight: 7,
  },
  image: {
    height: 32,
    width: 32,
    borderRadius: 20,
  },
};

export { CardHeader };
