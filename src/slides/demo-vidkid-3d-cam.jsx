import './slides.css'

import React, { Component, Fragment } from 'react'

import VidKid from '../components/vid-kid'
import doc from '../vid-kid-docs/3d-cam'

export default class SlideContent extends Component {
	static get name() {
		return 'demo-vidkid-3d-cam'
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
