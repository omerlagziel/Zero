/* eslint-disable global-require */
import React, { Component } from 'react';
import {
	ListView,
	ActivityIndicator,
	RefreshControl,
	View
} from 'react-native';
import InfiniteScrollView from 'react-native-infinite-scroll-view';

/*
	<List
		list={this.props.friendsList}
		renderRow={this.enterChat.bind(this)}
	/>
*/

class List extends Component {
  constructor(props) {
		super(props);
		this.state = { dataSource: [] };
	}

	componentWillMount() {
		this.createDataSource(this.props);
	}

	componentWillReceiveProps(nextProps) {
		this.createDataSource(nextProps);
	}

	scrollTo(params) {
			this.refs.list.getScrollResponder().scrollTo(params);
	}

  createDataSource({ list }) {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		//[{ data: { content: 'cloneMe!' } }]
		const listDs = ds.cloneWithRows(list);
		this.setState({ dataSource: listDs });
	}

	topIndicatorRender() {
		return (
			<ActivityIndicator style={{ padding: 15 }} size="large" color="gray" />
		);
	}
	renderRefreshControl() {
    if (this.props.renderRefreshControl) {
      return this.props.renderRefreshControl({ onRefresh: this._onRefresh });
    }
    return (
      <RefreshControl
        onRefresh={this.props.onRefresh}
        refreshing={this.props.isRefreshing}
        colors={this.props.refreshableColors}
        progressBackgroundColor={this.props.refreshableProgressBackgroundColor}
        size={this.props.refreshableSize}
        tintColor={this.props.refreshableTintColor}
        title={this.props.refreshableTitle}
      />
    );
	}

	renderScrollComponent(props) {
		if (props.onLoadMoreAsync) {
			return <InfiniteScrollView {...props} />;
		}
	}

	render() {
		const { onLoadMoreAsync, style, renderRow, canLoadMore, onRefresh, ...extraProps } = this.props;

		return (
			<ListView
				ref='list'
				enableEmptySections
				renderScrollComponent={onLoadMoreAsync ? this.renderScrollComponent : undefined}
				style={style}
				dataSource={this.state.dataSource}
				renderRow={renderRow ? renderRow.bind(this) : () => <View />}
				canLoadMore={canLoadMore}
				onLoadMoreAsync={onLoadMoreAsync || (() => {})}
				refreshControl={onRefresh ? this.renderRefreshControl() : undefined}
				onLayout={(event) => {
					this.setState({
						listHeight: event.nativeEvent.layout.height
					});
				}}
				renderFooter={() => {
					return (
						<View
							onLayout={(event) => {
								this.setState({
									footerY: event.nativeEvent.layout.y
								});
							}}
						/>
					);
				}}
				{...extraProps}
			/>
		);
	}
}

export { List };
