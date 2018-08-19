import './slides.css'

import React, { Component, Fragment } from 'react'
import Code from '../components/code'

const CODE_TEXT = `window.addEventListener("gamepadconnected", (event) => {
	gamepadIndex = event.gamepad.index;
	window.requestAnimationFrame(onAnimationFrame);
});

onAnimationFrame = () => {
	let gamepad = navigator.getGamepads()[gamepadIndex];
	console.log(window.gamepad.axes[0]); // 0.23...
	console.log(window.gamepad.buttons[0]); // 1.0
	window.requestAnimationFrame(onAnimationFrame);
}`

export default class SlideContent extends Component {
	static get name() {
		return 'gamepad'
	}

	static get steps() {
		return [1, 2, 3, 4, 5, 6, 7, 8]
	}

	render() {
		return (
			<Fragment>
				<h1>Gamepad:</h1>
				<a className="bitly" target="_blank" href="http://bit.ly/jsconf-vs">
					bit.ly/jsconf-vs
				</a>
				<Code
					lang="javascript"
					text={CODE_TEXT}
					steps={[[1, 4], [2], [3], [6, 11], [7], [8, 9], [10], null]}
					step={this.props.step}
				/>
			</Fragment>
		)
	}
}
