/* eslint-disable global-require */
import React, { Component } from 'react';
import { View, Image, TouchableWithoutFeedback, Text } from 'react-native';
import { List, Icon } from '..';

/*
		<UploadImageList
			list={this.props.image}
			navigator={this.props.navigator}
			onImageRemove={this._onImageRemove.bind(this)}
			onImageEdit={this._onImageCrop.bind(this)}
		/>
*/

class UploadImageList extends Component {
	showLightbox(image) {
		const rightButtons = {};
		if (this.props.onImageRemove) {
			rightButtons.remove = {
				onPress: () => this.props.onImageRemove(image)
			};
		}

		if (this.props.onImageEdit) {
			rightButtons.edit = {
				onPress: () => this.props.onImageEdit(image)
			};
		}

		this.props.navigator.showModal({
			screen: 'PetSpot.LightBox',
			passProps: {
				image: image.path,
				rightButtons
			}
		});
	}

	renderRow(image) {
		return (
			<View>
				<TouchableWithoutFeedback
					onPress={() => this.showLightbox(image)}
					onLongPress={() => this.toggleOptionsModal()}
				>
					<Image
						source={{ uri: image.path }}
						style={{ height: 120, width: 120, margin: 15 }}
					/>
				</TouchableWithoutFeedback>
			</View>
    );
	}


	render() {
		return (
			<List
				contentContainerStyle={this.props.style}
				list={this.props.list}
				renderRow={this.renderRow.bind(this)}
				horizontal
			/>
		);
	}
}

const styles = {
	deleteButton: {
		position: 'absolute',
		top: -5,
		right: -5
	},
	deleteIcon: {
		textAlign: 'right',
		borderRadius: 100,
		backgroundColor: 'white'
	}
};

export { UploadImageList };
