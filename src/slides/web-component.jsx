import './slides.css'

import React, { Component, Fragment } from 'react'
import Code from '../components/code'
// import AceEditor from 'react-ace'

// import 'brace/mode/javascript'
// import 'brace/theme/monokai'

const CODE_TEXT = `class N extends HTMLElement {
	connectedCallback() {} // Added to DOM
	disconnectedCallback() {} // Removed from DOM
	adoptedCallback() {} // Moved to another document

	static get observedAttributes() { return ['width'] }
	attributeChangedCallback(name, oldValue, newValue) {
		// Called when an attribute is changed
	}
}`

export default class SlideContent extends Component {
	static get name() {
		return 'web-component'
	}

	static get steps() {
		return [1, 2, 3, 4, 5]
	}

	render() {
		return (
			<Fragment>
				<h1>Web Components</h1>
				<Code
					lang="javascript"
					text={CODE_TEXT}
					steps={[[1, 10], [1, 2, 10], [1, 3, 10], [1, 4, 10], [1, 5, 6, 7, 8, 9, 10]]}
					step={this.props.step}
				/>
			</Fragment>
		)
	}
}
