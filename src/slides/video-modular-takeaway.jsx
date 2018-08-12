import './slides.css'

import React, { Component, Fragment } from 'react'

export default class SlideContent extends Component {
	static get name() {
		return 'video-modular-takeaway'
	}

	// static get steps() {
	// 	return ['start', 1, 2, 3]
	// }

	render() {
		return (
			<Fragment>
				<h1>Hardware video synthesis is cool</h1>
				<ol>
					<li className="step-1">It's analog, it's VHS, it's smudgy, it's lo-fi.</li>
					<li className="step-2">
						I like lo-fi, but I also like <code>DIGITAL</code>...
					</li>
				</ol>
			</Fragment>
		)
	}
}
