import './slides.css'

import React, { Component, Fragment } from 'react'

export default class SlideContent extends Component {
	static get name() {
		return 'how-its-made'
	}

	// static get steps() {
	// 	return [1, 2, 3, 4]
	// }

	render() {
		return (
			<Fragment>
				<h1>How It's Made</h1>
				<ol>
					<li>Node UI: React</li>
					<li>Connections: SVG</li>
					<li>Each Node: Web Component (HACK)</li>
					<li>Display: Write to iframe</li>
					<li>Live coding: Eval</li>
				</ol>
			</Fragment>
		)
	}
}
