import './slides.css'

import React, { Component, Fragment } from 'react'
import Code from '../components/code'
// import AceEditor from 'react-ace'

// import 'brace/mode/javascript'
// import 'brace/theme/monokai'

export default class SlideContent extends Component {
	static get name() {
		return 'web-component-2'
	}

	static get steps() {
		return ['class', 'define', 'html']
	}

	render() {
		return (
			<Fragment>
				<h1>Web Components</h1>

				<Code
					className="class"
					lang="javascript"
					text={'class UserIcon extends HTMLElement { ... }'}
				/>
				<Code
					className="define"
					lang="javascript"
					text={'window.customElements.define("user-icon", UserIcon);'}
				/>
				<Code className="html" lang="html" text={'<user-icon user-id="48521">...</user-icon>'} />
			</Fragment>
		)
	}
}
