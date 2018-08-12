import './slides.css'

import React, { Component, Fragment } from 'react'

export default class SlideContent extends Component {
	static get name() {
		return 'final-lessons'
	}

	static get steps() {
		return ['start', 1, 2, 3, 4, 5]
	}

	render() {
		return (
			<div className="scroller">
				<h1>Lessons Learned</h1>
				<ul>
					<li className="hide item-1">There's a solution</li>
					<li className="hide item-1">Expect to make several wrong turn</li>
					<li className="hide item-2">You'll feel despair</li>
					<li className="hide item-3" />
					<li className="hide item-4">CouchDB</li>
					<li className="hide item-5">Scenes &amp; Nested node maps</li>
				</ul>
			</div>
		)
	}
}
