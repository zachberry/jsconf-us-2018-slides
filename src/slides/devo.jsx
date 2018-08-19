import './slides.css'

import React, { Component, Fragment } from 'react'

export default class SlideContent extends Component {
	static get name() {
		return 'devo'
	}

	render() {
		return (
			<Fragment>
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/VN32kQUHBK0?rel=0&amp;showinfo=0&amp;start=45&amp;controls=0"
					frameborder="0"
					allow="autoplay; encrypted-media"
				/>
				<div className="mtv">
					<div>Devo</div>
					<div>"The Day My Baby Gave Me A Surprise"</div>
					<div>Duty Now for the Future</div>
					<div>Virgin</div>
				</div>
			</Fragment>
		)
	}
}
