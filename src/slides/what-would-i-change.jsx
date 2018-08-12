import './slides.css'

import React, { Component, Fragment } from 'react'

export default class SlideContent extends Component {
	static get name() {
		return 'what-would-i-change'
	}

	static get steps() {
		return ['start', 1, 2, 3, 4, 5]
	}

	render() {
		return (
			<div className="scroller">
				<h1>If I could do it again &amp; future development...</h1>
				<ul>
					<li className="hide item-1">Not sure I'd use native web components</li>
					<li className="hide item-2">Investigate React alternatives - perhaps go native?</li>
					<li className="hide item-3">
						Screen: Perhaps use web component instead of write to iframe
					</li>
					<li className="hide item-4">CouchDB</li>
					<li className="hide item-5">Scenes &amp; Nested node maps</li>
				</ul>
			</div>
		)
	}
}
