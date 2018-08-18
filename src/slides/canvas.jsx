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
		return [1, 2, 3, 4, 5, 6, 'bitly']
	}

	render() {
		return (
			<div className="slider">
				<Code
					lang="javascript"
					text={CODE_TEXT}
					steps={[null, [1, 2, 3], [1, 5], [1, 6], [8, 9], null]}
					step={this.props.step}
				/>
				<a
					className="bitly"
					target="_blank"
					href="https://codepen.io/zachberry/pen/zLQvvZ?editors=1010"
				>
					https://codepen.io/zachberry/pen/zLQvvZ?editors=1010
				</a>
			</div>
		)
	}
}
