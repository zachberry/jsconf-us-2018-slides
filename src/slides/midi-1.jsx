import './slides.css'
import sine from './sine.svg'
import bubbleCutout from './bubble-cutout.svg'
import synth from './synth.svg'
import synthSpeak from './synth-speak.svg'
import boss from './boss.svg'
import bossSpeak from './boss-speak.svg'
import drumsSpeak from './drums-speak.svg'
import akai from './akai.svg'
import akaiSpeak from './akai-speak.svg'
import midiLogo from './midi-logo.svg'

import React, { Component, Fragment } from 'react'

export default class SlideContent extends Component {
	static get name() {
		return 'midi-1'
	}

	static get steps() {
		return [
			'synth',
			'synth-speak',
			'synth-and-boss',
			'boss-speak',
			'all-three',
			'language-boss',
			'language-synth',
			'language-akai',
			'sad',
			'midi',
			'midi-boss',
			'midi-synth',
			'midi-akai',
			'connected',
			'dance'
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
				<img className="synth-speak" src={synthSpeak} />
				<img className="synth" src={synth} />
				<img className="drums-speak" src={drumsSpeak} />
				<img className="boss-speak" src={bossSpeak} />
				<img className="boss" src={boss} />
				<img className="akai-speak" src={akaiSpeak} />
				<img className="akai" src={akai} />
				<img className="midi-logo" src={midiLogo} />
			</Fragment>
		)
	}
}
