import './slides.css'

import React, { Component, Fragment } from 'react'

export default class SlideContent extends Component {
	static get name() {
		return 'modular-2'

		//https://2018.jsconf.us/
	}

	static get classes() {
		return ['demo']
	}

	render() {
		return (
			<Fragment>
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/oFadopWxKjw?rel=0&amp;showinfo=0&amp;start=198"
					frameborder="0"
					allow="autoplay; encrypted-media"
					allowfullscreen
				/>
				<div className="mtv">
					<div>Video by Andrew Huang</div>
				</div>
			</Fragment>
		)
	}
}
