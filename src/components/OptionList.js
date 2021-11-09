import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
import { Icon } from '.';

class OptionList extends Component {
  renderOptionView(val) {
    if (val.loading) {
      return (
        <ActivityIndicator style={[styles.option, { alignItems: 'center' }]} />
      );
    }

    return (
      <View style={styles.option}>
        {val.icon ? <Icon style={styles.icon} name={val.icon} size={17} /> : undefined}
        <Text style={styles.title}>
          {val.title}
        </Text>
      </View>
    );
  }

  renderOptions() {
    return map(this.props.list, (val, key) => {
      return (
        <TouchableWithoutFeedback
          disabled={val.disabled || false}
          onPress={val.onPress}
          key={key}
        >
          {this.renderOptionView(val)}
        </TouchableWithoutFeedback>
      );
    });
  }

  render() {
    const { container } = styles;
    return (
      <View style={container}>
        {this.renderOptions()}
      </View>
    );
  }
}

const styles = {
  container: {
    backgroundColor: '#FFF',
  },
  option: {
    flexDirection: 'row',
    padding: 15,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    alignItems: 'center',
  },
  title: {
    flex: 1,
  },
  icon: {
    width: 30
  },
};

export { OptionList };
