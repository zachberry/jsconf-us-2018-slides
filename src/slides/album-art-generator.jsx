import './slides.css'

import React, { Component, Fragment } from 'react'

export default class SlideContent extends Component {
	static get name() {
		return 'album-art-generator'
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
			</Fragment>
		)
	}
}
