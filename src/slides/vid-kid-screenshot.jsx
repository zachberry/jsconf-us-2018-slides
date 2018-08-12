import './slides.css'

import React, { Component, Fragment } from 'react'
import vidKidScreenshot from './vid-kid-screenshot-2.png'

export default class SlideContent extends Component {
	static get name() {
		return 'vid-kid-screenshot'
	}

	static get steps() {
		return ['start', 1, 2, 3, 4, 5, 6, 7]
	}

	render() {
		return (
			<Fragment>
				<img src={vidKidScreenshot} />
				<div className="box box-2b" />
				<div className="box box-2c" />
				<div className="box" />
			</Fragment>
		)
	}
}
