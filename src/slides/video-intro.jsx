import './slides.css'

import React, { Component, Fragment } from 'react'

export default class SlideContent extends Component {
	static get name() {
		return 'video-intro'
	}

	render() {
		return (
			<Fragment>
				<h1>
					Video &amp; Can<span className="kerning">v</span>
					<span className="kerning-2">as</span>
				</h1>
			</Fragment>
		)
	}
}
