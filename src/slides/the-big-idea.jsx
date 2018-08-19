import './slides.css'

import React, { Component, Fragment } from 'react'

export default class SlideContent extends Component {
	static get name() {
		return 'the-big-idea'
	}

	render() {
		return (
			<Fragment>
				<h1>The Idea</h1>
			</Fragment>
		)
	}
}
