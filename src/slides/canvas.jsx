import './slides.css'

import React, { Component, Fragment } from 'react'
import Code from '../components/code'

const CODE_TEXT = `// Get video to canvas...
let canvas = /* some <canvas> element */;
let video = /* some <video> element */;

let ctx = canvas.getContext('2d');
ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

// Get the colors of a pixel...
ctx.getImageData(x, y, 1, 1).data //Uint8Clamped [r,g,b]`

export default class SlideContent extends Component {
	static get name() {
		return 'canvas'
	}

	static get steps() {
		return [1, 2, 3, 4, 5, 6]
	}

	render() {
		return (
			<div className="slider">
				<h1>Canvas</h1>
				<Code
					lang="javascript"
					text={CODE_TEXT}
					steps={[null, [2, 3], [5], [6], [8, 9], null]}
					step={this.props.step}
				/>
				<a className="bitly" target="_blank" href="http://bit.ly/jsconf-vs">
					bit.ly/jsconf-vs
				</a>
			</div>
		)
	}
}
