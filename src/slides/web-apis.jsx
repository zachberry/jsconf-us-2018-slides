import './slides.css'

import React, { Component, Fragment } from 'react'

export default class SlideContent extends Component {
	static get name() {
		return 'web-apis'
	}

	static get steps() {
		return ['start', 'show-libraries', 'show-apis']
	}

	render() {
		return (
			<Fragment>
				<ul>
					<li>CSS Animations</li>
					<li>2D graphics with canvas</li>
					<li>3D graphics with WebGL</li>
					<li>Vectors with SVG</li>
					<li className="library">Three.js</li>
					<li className="library">Pixi.js</li>
					<li className="api">Web Audio API</li>
					<li className="api">Web MIDI API</li>
					<li className="api">Proximity API</li>
					<li className="api">Web Animations API</li>
					<li className="api">Media Capture and Streams API</li>
					<li className="api">Device Orientation API</li>
					<li className="api">Screen Orientation API</li>
					<li className="api">Camera API</li>
					<li className="api">FileHandleAPI</li>
					<li className="api">Bluetooth</li>
					<li className="api">Geolocation API</li>
					<li className="api">And more...</li>
				</ul>
			</Fragment>
		)
	}
}
