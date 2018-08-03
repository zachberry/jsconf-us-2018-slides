import './slides.css'

import React, { Component, Fragment } from 'react'

export default class SlideContent extends Component {
	static get name() {
		return 'demo-write-to-iframe'
	}

	static get classes() {
		return 'demo'
	}

	render() {
		return (
			<Fragment>
				<iframe allow="camera; microphone; midi" src="http://localhost:3002/" />
			</Fragment>
		)
	}
}
