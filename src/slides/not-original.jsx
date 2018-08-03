import './slides.css'

import React, { Component, Fragment } from 'react'

export default class SlideContent extends Component {
	static get name() {
		return 'not-original'
	}

	render() {
		return (
			<Fragment>
				<h1>Some existing patchable software visualizers...</h1>
			</Fragment>
		)
	}
}
