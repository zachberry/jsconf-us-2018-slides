import './slides.css'

import React, { Component, Fragment } from 'react'

import VidKid from '../components/vid-kid'
import doc from '../vid-kid-docs/pixel-cam'

export default class SlideContent extends Component {
	static get name() {
		return 'demo-vidkid-pixel-cam'
	}

	static get classes() {
		return 'demo'
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
