import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 50
    };
  }
  onContentSizeChange(event) {
    this.setState({ height: event.nativeEvent.contentSize.height });
  }

  renderText() {
    if (this.props.label && this.props.label.length > 0) {
      return <Text style={styles.labelStyle}>{this.props.label}</Text>;
    }
  }

  render() {
    const { inputStyle, inputContainer, containerStyle } = styles;
    const { style, ...extraProps } = this.props;

    return (
      <View style={[containerStyle, style]}>
        {this.renderText()}
        <View
          style={[inputContainer, this.props.inputContainerStyle, { height: this.state.height }]}
        >
          <TextInput
            onContentSizeChange={this.onContentSizeChange.bind(this)}
            style={[inputStyle, this.props.inputStyle]}
            underlineColorAndroid={'transparent'}
            {...extraProps}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  inputContainer: {
    flex: 2,
    backgroundColor: '#FFF',
  },
  inputStyle: {
    flex: 2,
    color: '#000',
    padding: 15,
    paddingLeft: 10,
    fontSize: 15,
  },
  labelStyle: {
    fontSize: 16,
    paddingLeft: 20,
    color: '#333',
    flex: 1,
  }
};

export { Input };
