import './slides.css'

import React, { Component, Fragment } from 'react'

import VidKid from '../components/vid-kid'
import drumsSvg from '../vid-kid-docs/drums-svg'

export default class SlideContent extends Component {
	static get name() {
		return 'demo-1'
	}

	static get classes() {
		return 'demo'
	}

	static get features() {
		return ['webcam']
	}

	render() {
		return (
			<Fragment>
				<VidKid doc={drumsSvg} />
			</Fragment>
		)
	}
}
