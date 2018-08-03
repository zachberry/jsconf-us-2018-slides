import './slides.css'

import React, { Component, Fragment } from 'react'

export default class SlideContent extends Component {
	static get name() {
		return 'modular-takeaway'
	}

	static get steps() {
		return ['start', 1, 2, 3]
	}

	render() {
		return (
			<Fragment>
				<h1>
					What the #%@* does this have to do with{' '}
					<span className="js-box">
						<span>JS</span>
					</span>?
				</h1>
				<ol>
					<li className="step-1">
						Modular synthesis is composed of several modules. Takes input and gives output.
					</li>
					<li className="step-2">
						Kinda like how functional programs are composed of several functions. Functions take
						input and give output.
					</li>
				</ol>
				<div className="step-3">🤔</div>
			</Fragment>
		)
	}
}
