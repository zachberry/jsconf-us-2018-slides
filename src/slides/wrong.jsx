import './slides.css'

import React, { Component, Fragment } from 'react'

export default class SlideContent extends Component {
	static get name() {
		return 'wrong'
	}

	render() {
		return (
			<Fragment>
				<h1>I Did Everything Wrong</h1>
			</Fragment>
		)
	}
}
