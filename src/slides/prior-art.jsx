import './slides.css'

import React, { Component, Fragment } from 'react'

export default class SlideContent extends Component {
	static get name() {
		return 'prior-art'
	}

	// static get steps() {
	// 	return ['start', 1, 2, 3, 4, 5, 6, 7]
	// }

	render() {
		return (
			<Fragment>
				<ul>
					<li>Max for Live</li>
					<li>Pure Data</li>
					<li>Touch Designer</li>
					<li>Others?</li>
				</ul>
			</Fragment>
		)
	}
}
