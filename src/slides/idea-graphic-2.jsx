import './slides.css'

import ideaGraphic2 from './idea-graphic-2.svg'
import wires2 from './wires-2.svg'
import wiresInternal from './wires-internal.svg'
import tv from './tv.svg'
import tvFrame from './tv-frame.svg'
import tri from './tri.svg'
import mouseOutline from './mouse-outline.svg'
import mouse from './mouse.svg'
import gamepadOutline from './gamepad-outline.svg'
import gamepad from './gamepad.svg'
import mediaOutline from './media-outline.svg'
import media from './media.svg'
import drum from './drum-small.svg'
import drumOutline from './drum-outline.svg'
import bubble from './small-bubble.svg'

import React, { Component, Fragment } from 'react'

export default class SlideContent extends Component {
	static get name() {
		return 'idea-graphic-2'
	}

	static get steps() {
		return ['start', 'zoom']
	}

	render() {
		return (
			<div className="wrapper">
				{/* <img className="bg" src={ideaGraphic2} /> */}

				<svg
					className="wires"
					xmlns="http://www.w3.org/2000/svg"
					width="1075.3167"
					height="621.9688"
					viewBox="0 0 1075.3167 621.9688"
				>
					<g id="Layer_3" data-name="Layer 3">
						<g class="cls-1">
							<rect class="cls-2" x="80.5117" y="0.3458" width="994.459" height="621.2769" />
							<path
								d="M994.459.6911V621.2776H.6911V.6911H994.459M995.15,0H0V621.9688H995.15Z"
								transform="translate(80.1667)"
							/>
						</g>
					</g>
					<g id="Layer_2" data-name="Layer 2">
						<polyline
							class="cls-3"
							points="5.5 323.484 196.5 323.484 196.5 166.484 439.994 166.484"
						/>
						<polyline
							class="cls-4"
							points="5.5 296.982 532.467 296.982 532.467 399.814 678.051 399.814"
						/>
						<polyline
							class="cls-5"
							points="5.5 272.484 165.558 272.484 165.558 67.484 920.171 67.484 920.171 178.816"
						/>
						<path class="cls-6" d="M49.8211,349.4844" transform="translate(80.1667)" />
						<polyline
							class="cls-6"
							points="388.083 444.767 251.909 444.767 251.909 349.484 5.5 349.484"
						/>
					</g>
				</svg>

				<img className="wires-internal" src={wiresInternal} />
				<div className="circle circle-css">CSS</div>
				<div className="circle circle-three-js">THREE.JS</div>
				<div className="circle circle-canvas">&lt;CANVAS&gt;</div>
				<div className="circle circle-video">&lt;VIDEO&gt;</div>
				<img className="tv" src={tv} />
				<img className="tri" src={tri} />
				<div className="tv-circle" />
				<div className="scanlines" />
				<img className="tv" src={tvFrame} />
			</div>
		)
	}
}
