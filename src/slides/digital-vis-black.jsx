import './slides.css'

import React, { Component, Fragment } from 'react'

export default class SlideContent extends Component {
	static get name() {
		return 'digital-vis-black'
	}

	render() {
		return (
			<Fragment>
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/9veZ-9YrsAM?rel=0&amp;showinfo=0&amp;start=112"
					frameborder="0"
					allow="autoplay; encrypted-media"
					allowfullscreen
				/>
				<div className="mtv">
					<div>Kyoka</div>
					<div>"23 iSH"</div>
					<div>Video: [audioreact•lab]</div>
				</div>
			</Fragment>
		)
	}
}
