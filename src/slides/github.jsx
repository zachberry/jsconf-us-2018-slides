import './slides.css'

import React, { Component, Fragment } from 'react'

export default class SlideContent extends Component {
	static get name() {
		return 'github'
	}

	render() {
		return (
			<Fragment>
				<h1>More info...</h1>
				<ul>
					<li>
						App: <a href="https://vidkid.app">vidkid.app</a>
					</li>
					<li>
						Code: <a href="https://github.com/zachberry/vidkid">github.com/zachberry/vidkid</a>
					</li>
				</ul>
			</Fragment>
		)
	}
}
