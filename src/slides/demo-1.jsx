import './slides.css'

import React, { Component, Fragment } from 'react'

export default class SlideContent extends Component {
	static get name() {
		return 'demo-1'
	}

	// static get steps() {
	// 	return [1, 2, 3, 4]
	// }

	render() {
		return (
			<Fragment>
				<iframe src="http://localhost:3002/" />
			</Fragment>
		)
	}
}
