/* eslint-disable global-require */
import React, { Component } from 'react';
import { Image, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { List } from '..';

class Carousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			width: Dimensions.get('window').width,
			height: Dimensions.get('window').height,
			isLoadingImage: true
		};
	}

	showLightbox(image) {
		this.props.navigator.showModal({
			screen: 'PetSpot.LightBox',
			passProps: { image }
		});
	}

	renderRow({ uri, height, width }) {
		return (
			<TouchableWithoutFeedback
				style={{ flex: 1 }}
				onPress={() => this.showLightbox(uri)}
			>
				<Image
					resizeMode='contain'
					resizeMethod={'resize'}
					style={{
						height: (height * (this.state.width / width)),
						width: this.state.width,
						backgroundColor: '#eeeeee'
					}}
					source={{ uri }}
				/>
			</TouchableWithoutFeedback>
		);
	}


	render() {
		return (
			<List
				contentContainerStyle={[
					this.props.style,
					{ alignItems: 'center', backgroundColor: '#f5f5f5' }
				]}
				list={this.props.images}
				renderRow={this.renderRow.bind(this)}
				horizontal
			/>
		);
	}
}

export { Carousel };
