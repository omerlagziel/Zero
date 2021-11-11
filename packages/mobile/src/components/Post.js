import React, { Component } from 'react';
import { Text, View, Dimensions, Alert, Image } from 'react-native';
import { Card, CardSection, CardHeader, CardActions, Icon, Carousel } from '.';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: Dimensions.get('window').width,
    };
  }

  onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ width: layout.width });
  }

  renderImages() {
    if (this.props.images) {
        return (
          <Carousel
            images={this.props.images}
            navigator={this.props.navigator}
          />
        );
    }
  }

  renderLocation() {
    if (this.props.location) {
      return (
        <View style={styles.location}>
          <Icon name="map-marker" size={11} style={{ margin: 4 }} />
          <Text style={styles.locationText}>{this.props.location}</Text>
        </View>
      );
    }

    return null;
  }

  render() {
    const { card, content } = styles;
    return (
      <Card style={card}>
        <CardHeader
          style={{ paddingTop: 12 }}
          title={this.props.poster.displayName}
          renderSubtitle={() => <Text style={{ fontSize: 12 }}>{moment(this.props.timestamp).fromNow()}</Text>}
          image={{
            uri: this.props.poster.photoUrl
          }}
        />
        <CardSection style={{ flexDirection: 'column', paddingBottom: 10 }}>
          <Text style={content}>{this.props.content}</Text>
        </CardSection>

        <View style={{ flex: 1 }}>
          {this.renderImages()}
        </View>
        <View style={{ flexDirection: 'row', paddingTop: 10 }}>
          <CardActions style={{ flex: 3 }} />

          <View style={{ alignItems: 'flex-end', flex: 4 }}>
            {this.renderLocation()}
          </View>
        </View>
      </Card>
    );
  }
}

const styles = {
  card: {
    paddingBottom: 0,
    paddingTop: 0,
  },
  content: {
    color: '#424242',
    fontSize: 14
  },
  location: {
    flex: 1,
    flexDirection: 'row',
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 10,
    alignItems: 'center',
    position: 'relative',
  },
  locationText: {
    color: '#9e9e9e',
    fontSize: 13
  },
  imageView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cyan',
  }
};

export { Post };
