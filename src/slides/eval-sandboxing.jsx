import './slides.css'

import React, { Component, Fragment } from 'react'

export default class SlideContent extends Component {
	static get name() {
		return 'eval-sandboxing'
	}

	// static get steps() {
	// 	return ['crockford', 'asterix', 'me', 'me-2']
	// }

	render() {
		return (
			<Fragment>
				<h1>
					Sandboxing <code>new Function("...")</code>
				</h1>
				<a href="https://blog.risingstack.com/writing-a-javascript-framework-sandboxed-code-evaluation/">
					https://blog.risingstack.com/writing-a-javascript-framework-sandboxed-code-evaluation/"
				</a>
			</Fragment>
		)
	}
}
