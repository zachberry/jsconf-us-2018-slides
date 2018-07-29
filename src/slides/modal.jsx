import './slides.css'

import React, { Component, Fragment } from 'react'

export default class SlideContent extends Component {
	static get name() {
		return 'modal'
	}

	// static get steps() {
	// 	return ['start', 'h1', 'h2']
	// }

	render() {
		return (
			<Fragment>
				<iframe src="http://instagram.com/p/BkaVFbrgVpC/embed" frameborder="0" />
			</Fragment>
		)
	}
}
