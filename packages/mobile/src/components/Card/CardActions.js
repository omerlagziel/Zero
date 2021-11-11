import React from 'react';
import { View } from 'react-native';
import { CardIcon } from './CardIcon';

const CardActions = (props) => {
  const { actionsContainer } = styles;
  return (
      <View style={[actionsContainer, props.style]}>
        <CardIcon icon="share" />
        <CardIcon icon="heart" />
      </View>
  );
};

const styles = {
  actionsContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    borderTopRightRadius: 32,
  }
};

export { CardActions };
