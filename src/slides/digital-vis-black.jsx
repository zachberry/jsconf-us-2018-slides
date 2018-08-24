import './slides.css'

import React, { Component, Fragment } from 'react'

export default class SlideContent extends Component {
	static get name() {
		return 'digital-vis-black'
	}

	static get steps() {
		return ['start', 'about', 'about-2']
	}

	render() {
		return (
			<Fragment>
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/9veZ-9YrsAM?rel=0&amp;showinfo=0&amp;start=112&amp;controls=0"
					frameborder="0"
					allow="autoplay; encrypted-media"
				/>
				<div className="mtv">
					<div>Kyoka</div>
					<div>"23 iSH"</div>
					<div>Video: [audioreact•lab]</div>
				</div>
				<div className="about">
					<ul>
						<li className="step-1">What if I could create videos like this live?</li>
						<li className="step-2">
							I could totally make these with <code>&lt;canvas&gt;</code> or SVG!
						</li>
					</ul>
				</div>
			</Fragment>
		)
	}
}
