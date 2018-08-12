import './slides.css'

import React, { Component, Fragment } from 'react'

export default class SlideContent extends Component {
	static get name() {
		return 'me'
	}

	static get steps() {
		return [1, 2, 3, 4, 5, 6]
	}

	render() {
		return (
			<Fragment>
				<h1>Me</h1>
				<ul>
					<li>Web Developer at UCF</li>
					<li>Love Javascript</li>
					<li>Love the Browser</li>
					<li>Submitted JSConf proposal on the last day</li>
					<li>Didn't think I'd get picked</li>
					<li>
						<span className="highlight">I got picked</span>
					</li>
				</ul>
			</Fragment>
		)
	}
}
