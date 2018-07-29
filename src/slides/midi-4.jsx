import './slides.css'

import React, { Component, Fragment } from 'react'

export default class SlideContent extends Component {
	static get name() {
		return 'midi-4'
	}

	static get steps() {
		return [1, 2, 3, 4, 5, 6, 7, 8]
	}

	render() {
		return (
			<Fragment>
				<h1>MIDI Messages</h1>
				<ul>
					<li className="msg-2">Note On</li>
					<li className="msg-3">Note Off</li>
					<li className="msg-4">Clock (Tempo)</li>
					<li className="msg-5">Stop Playing</li>
					<li className="msg-6">Start Playing</li>
					<li className="msg-7">Control Change</li>
					<li className="msg-8">...and more!</li>
				</ul>
			</Fragment>
		)
	}
}
