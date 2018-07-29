import './slides.css'

import React, { Component, Fragment } from 'react'

export default class SlideContent extends Component {
	static get name() {
		return 'dog'
	}

	render() {
		return (
			<Fragment>
				<h1>dog</h1>
			</Fragment>
		)
	}
}
