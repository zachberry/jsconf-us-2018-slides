import './webcam-panel.css';

import React from 'react';

import Webcam from './webcam';

export default class WebcamPanel extends React.Component {
	constructor(props) {
		super(props)

		this.boundOnClick = this.onClick.bind(this)
	}

	onClick(event) {
		this.props.onToggle()
	}

	render() {
		return <div className={"webcam-panel" + (this.props.expanded ? ' is-expanded' : ' is-not-expanded')}>
			<Webcam />
			<button onClick={this.boundOnClick}>{this.props.expanded ? 'Shrink' : 'Grow'}</button>
		</div>
	}
}