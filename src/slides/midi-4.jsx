import './slides.css'

import React, { Component, Fragment } from 'react'

export default class SlideContent extends Component {
	static get name() {
		return 'midi-4'
	}

	render() {
		return (
			<Fragment>
				<h1>MIDI Messages</h1>
				<ul>
					<li>Note On</li>
					<li>Note Off</li>
					<li>Clock (Tempo)</li>
					<li>Stop Playing</li>
					<li>Start Playing</li>
					<li>Control Change</li>
					<li>...and more!</li>
				</ul>
			</Fragment>
		)
	}
}
