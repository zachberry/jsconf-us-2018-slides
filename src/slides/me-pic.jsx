import './slides.css'
import me from './me.jpg'
import logo from './jsconf-2015-logo.png'

import React, { Component, Fragment } from 'react'

export default class SlideContent extends Component {
	static get name() {
		return 'me-pic'
	}

	static get steps() {
		return ['start', 'zoom-2', 'logo']
	}

	step(currentStep) {
		return false
	}

	render() {
		return (
			<Fragment>
				<img className="me" src={me} />
				<img className="logo" src={logo} />
			</Fragment>
		)
	}
}
