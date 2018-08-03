import './slides.css'
import synth from './synth.svg'
import finger from './finger.svg'
import keyDown from './key-down.svg'
import keyDown2 from './key-down-2.svg'
import sine from './sine.svg'
import bubbleCutout from './bubble-cutout.svg'

import React, { Component, Fragment } from 'react'

export default class SlideContent extends Component {
	static get name() {
		return 'midi-2'
	}

	static get steps() {
		return [
			'start',
			'finger',
			'hit-key-audio',
			'hit-key-midi',
			'remove-key',
			'move-finger',
			'hit-key-2'
		]
	}

	render() {
		return (
			<Fragment>
				<div className="osc">
					<div className="bg" />
					<img className="sine" src={sine} />
					<img className="bubble-cutout" src={bubbleCutout} />
				</div>
				<img className="synth" src={synth} />
				<img className="key-down" src={keyDown} />
				<img className="key-down-2" src={keyDown2} />
				<img className="finger" src={finger} />
				<div className="bubble bubble-1">
					<div className="text">
						<span>Note On!</span>
						<span className="note">C3</span>
					</div>
				</div>
				<div className="bubble bubble-2">
					<div className="text">
						<span>Note On!</span>
						<span className="note">F2</span>
					</div>
				</div>
			</Fragment>
		)
	}
}
