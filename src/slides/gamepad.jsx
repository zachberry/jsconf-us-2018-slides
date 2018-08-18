import './slides.css'

import React, { Component, Fragment } from 'react'
import Code from '../components/code'

const CODE_TEXT = `window.addEventListener("gamepadconnected", () => {
	window.gamepad = navigator.getGamepads()[0];
	window.requestAnimationFrame(onAnimationFrame);
});

onAnimationFrame = () => {
	console.log(window.gamepad.axes[0]); // 0.23...
	console.log(window.gamepad.buttons[0]); // 1.0
	onAnimationFrame();
}`

export default class SlideContent extends Component {
	static get name() {
		return 'gamepad'
	}

	static get steps() {
		return [1, 2, 3, 4, 5, 6, 7]
	}

	render() {
		return (
			<Fragment>
				<h1>Gamepad:</h1>
				<Code
					lang="javascript"
					text={CODE_TEXT}
					steps={[[1, 4], [2], [3], [6, 10], [7], [8], [9]]}
					step={this.props.step}
				/>
			</Fragment>
		)
	}
}
