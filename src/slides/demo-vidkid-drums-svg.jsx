import './slides.css'

import React, { Component, Fragment } from 'react'

import VidKid from '../components/vid-kid'
import doc from '../vid-kid-docs/drums-svg'

export default class SlideContent extends Component {
	static get name() {
		return 'demo-vidkid-drums-svg'
	}

	static get classes() {
		return 'demo'
	}

	static get features() {
		return ['webcam']
	}

	render() {
		if (!this.props.isCurrentSlide) return null

		return (
			<Fragment>
				<VidKid url={this.props.vidKidURL} doc={doc} />
			</Fragment>
		)
	}
}
