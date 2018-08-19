import './slides.css'

import React, { Component, Fragment } from 'react'

export default class SlideContent extends Component {
	static get name() {
		return 'me'
	}

	static get steps() {
		return [1, 2, 3, 4]
	}

	render() {
		return (
			<Fragment>
				<h1>About me</h1>
				<ul>
					<li>Web Developer at UCF</li>
					<li>
						Love{' '}
						<div className="js-box">
							<span>JS</span>
						</div>{' '}
						and the browser
					</li>
					<li>
						Submitted JSConf proposal on the last day, <i>really</i> didn't think I'd be picked
					</li>
					<li>
						<span className="highlight">Which is why I submitted this as my photo...</span>
					</li>
				</ul>
			</Fragment>
		)
	}
}
