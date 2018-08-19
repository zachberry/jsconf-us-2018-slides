import './slides.css'

import React, { Component, Fragment } from 'react'

export default class SlideContent extends Component {
	static get name() {
		return 'digital-vis-white'
	}

	render() {
		return (
			<Fragment>
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/sWPO7tXWVhc?rel=0&amp;showinfo=0&amp;start=112&amp;controls=0"
					frameborder="0"
					allow="autoplay; encrypted-media"
				/>
				<div className="mtv">
					<div>AOKI takamasa</div>
					<div>"rhythm variation 05"</div>
				</div>
			</Fragment>
		)
	}
}
