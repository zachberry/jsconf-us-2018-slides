import './slides.css'

import React, { Component, Fragment } from 'react'

export default class SlideContent extends Component {
	static get name() {
		return 'original-idea'
	}

	static get steps() {
		return ['start', 1, 2, 3, 4, 5, 6, 7, 8]
	}

	render() {
		return (
			<Fragment>
				<h1>The idea</h1>
				<ol>
					<li className="step-1">Take Analog modular video synthesis...</li>
					<li className="step-2">
						And make it with{' '}
						<span className="js-box">
							<span>JS</span>
						</span>{' '}
						...
					</li>
					<li className="step-3">With multiple nodes which can be patched together...</li>
					<li className="step-4">Editable on the fly via UI or by code</li>
					<li className="step-5">Controllable by audio and hardware...</li>
					<li className="step-6">Using the browser as our rendering engine...</li>
					<li className="step-7">Leveraging libraries, web APIs and plain CSS!</li>
					<li className="step-8">
						Totally original! Nobody's built a patchable software visualizer!
					</li>
				</ol>
			</Fragment>
		)
	}
}
