import './slides.css'

import React, { Component, Fragment } from 'react'

export default class SlideContent extends Component {
	static get name() {
		return 'break-stuff-lesson'
	}

	static get steps() {
		return ['start', 1, 2]
	}

	render() {
		return (
			<Fragment>
				<h1>Lessons learned</h1>
				<ol>
					<li className="step-1">The browser is a powerful rendering engine</li>
					<li className="step-2">
						<code>&lt;marquee&gt;</code> tag is alive and well in 2018 🙌
					</li>
				</ol>
			</Fragment>
		)
	}
}
