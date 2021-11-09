import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator, Dimensions } from 'react-native';
import { Icon } from '.';

class BlockList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: Dimensions.get('window').width
    };
  }
  renderOptionView(val, key) {
    const height = this.state.windowWidth / 2;
    if (val.loading) {
      return (
        <View style={{ flex: 1, height: height / 1.3 }}>
          <ActivityIndicator
            key={key}
            size="large"
            style={[
              styles.option,
            ]}
          />
        </View>
      );
    }

    return (
      <TouchableOpacity
        style={{ flex: 1, height: height / 1.3 }}
        disabled={val.disabled || false}
        onPress={val.onPress}
        key={key}
      >
        <View style={[styles.option]}>
          {val.icon ? <Icon name={val.icon} size={35} /> : undefined}
          {
            val.image ? (
              <Image source={val.image} resizeMode="contain" style={{ height: height / 2.6 }} />
            ) : undefined
          }
          <Text style={{ marginTop: 5 }}>
            {val.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  renderOptions() {
    let previousView;
    return map(this.props.list, (val, key) => {
      if (key % 2 !== 0) {
        return (
          <View key={key} style={styles.row}>
            {this.renderOptionView(previousView.val, previousView.key)}
            {this.renderOptionView(val, key)}
          </View>
        );
      } else if (this.props.list.length - 1 === key) {
        return (
          <View key={key} style={styles.row}>
            {this.renderOptionView(val, key)}
          </View>
        );
      }


      previousView = { val, key };
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
  row: {
    flexDirection: 'row'
  },
  option: {
    flex: 1,
    padding: 30,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export { BlockList };
