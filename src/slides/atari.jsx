import './slides.css'

import React, { Component, Fragment } from 'react'

export default class SlideContent extends Component {
	static get name() {
		return 'atari'
	}

	static get steps() {
		return ['start', 'h1', 'h2']
	}

	render() {
		return (
			<div className="wrapper">
				<h1>Atari Video Music</h1>
				<h2>1977</h2>
			</div>
		)
	}
}
