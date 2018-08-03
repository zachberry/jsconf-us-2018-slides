import './webcam-panel.css'

import React from 'react'

import Webcam from './webcam'

export default class WebcamPanel extends React.Component {
	constructor(props) {
		super(props)

		this.boundOnClick = this.onClick.bind(this)
	}

	onClick(event) {
		this.props.onToggle()
	}

	render() {
		return (
			<div
				className={
					'webcam-panel' +
					(this.props.expanded ? ' is-expanded' : ' is-not-expanded') +
					(this.props.isSummoned ? ' is-summoned' : ' is-not-summoned')
				}
			>
				<Webcam />
				<button className="close-button" onClick={this.props.onClose}>
					&times;
				</button>
				<button className="expand-button" onClick={this.boundOnClick}>
					{this.props.expanded ? '⬊' : '⬉'}
				</button>
				<button className="summon-button" onClick={this.props.onSummon}>
					🎥
				</button>
			</div>
		)
	}
}
