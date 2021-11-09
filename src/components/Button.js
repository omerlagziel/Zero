import React from 'react';
import {
  TouchableOpacity,
  Text
} from 'react-native';

/*
  ## EXAMPLE:
  <Button
    label="click me"
    onPress={() => doSomething()}
    type="wide" /> // optional
*/

const getStyle = (type) => {
  switch (type) {
    case 'wide':
      return styles.buttonWide;
    case 'callForAction':
      return styles.buttonCallForAction;

    default:
      return styles.buttonRound;
  }
};

const Button = (props) => {
    const { style, onPress, label, type, textColor } = props;
    return (
      <TouchableOpacity style={[styles.button, getStyle(type), style]} onPress={onPress}>
        <Text style={[styles.buttonText, { color: textColor }]}>{label}</Text>
      </TouchableOpacity>
    );
};

const styles = {
  button: {
    paddingRight: 22,
    paddingLeft: 22,
    paddingTop: 10,
    paddingBottom: 10,
    //flex: 1,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },

  buttonCallForAction: {
    backgroundColor: '#FDD835',
    borderRadius: 25,
    borderWidth: 0,
    borderColor: '#fff'
  },

  buttonWide: {
    //flex: 1,
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderColor: '#f9f9f9'
  },

  buttonRound: {
    backgroundColor: '#f5f5f5',
    borderRadius: 50,
    borderWidth: 0,
  }
};

export { Button };
