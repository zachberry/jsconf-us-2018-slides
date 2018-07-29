import './slides.css'

import React, { Component, Fragment } from 'react'

export default class SlideContent extends Component {
	static get name() {
		return 'intro'
	}

	static get steps() {
		return ['start', 'then']
	}

	render() {
		return (
			<Fragment>
				<h1>
					Creating a Video Synth with{' '}
					<span className="js-box">
						<span>JS</span>
					</span>
				</h1>
				<h2>(And the browser)</h2>
			</Fragment>
		)
	}
}
