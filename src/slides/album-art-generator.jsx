import './slides.css'

import React, { Component, Fragment } from 'react'

export default class SlideContent extends Component {
	static get name() {
		return 'album-art-generator'
	}

	static get steps() {
		return ['start', 'about', 'about-2', 'about-3']
	}

	reload() {
		let src = this.refs.iframe.src
		this.refs.iframe.src = ''
		setTimeout(() => {
			this.refs.iframe.src = src
		}, 1)
	}

	render() {
		return (
			<Fragment>
				<iframe
					ref="iframe"
					src="./album-art-generator/index.html"
					frameborder="0"
					allow="autoplay; encrypted-media"
					allowfullscreen
				/>
				<button onClick={this.reload.bind(this)}>Reload</button>
				<div className="about">
					<ul>
						<li className="step-1">
							Changing behavior requires editing code, checking result, and repeat
						</li>
						<li className="step-2">Want a UI to tweak parameters live</li>
						<li className="step-3">🤔</li>
					</ul>
				</div>
			</Fragment>
		)
	}
}
