import './slides.css'

import React, { Component, Fragment } from 'react'

export default class SlideContent extends Component {
	static get name() {
		return 'modular'
	}

	static get steps() {
		return ['start', 'h1']
	}

	render() {
		return (
			<Fragment>
				<h1>Modular Synthesis</h1>
			</Fragment>
		)
	}
}
