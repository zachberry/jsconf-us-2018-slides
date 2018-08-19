import './slides.css'

import React, { Component, Fragment } from 'react'

import insta from './insta.png'

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
						Code Examples:{' '}
						<a target="_blank" href="http://bit.ly/jsconf-vs">
							bit.ly/jsconf-vs
						</a>
					</li>
					<li>
						App: <a href="https://vidkid.app">vidkid.app</a>
					</li>
					<li>
						Code: <a href="https://github.com/zachberry/vidkid">github.com/zachberry/vidkid</a>
					</li>
					<li>
						Me:{' '}
						<a target="_blank" href="https://www.instagram.com/zap_danger/">
							<img className="insta" src={insta} />@zap_danger
						</a>
					</li>
				</ul>
			</Fragment>
		)
	}
}
