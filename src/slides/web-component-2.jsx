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
		return ['html', 'define', 'class']
	}

	render() {
		return (
			<Fragment>
				<h1>Web Components</h1>
				<Code className="html" lang="html" text={'<kitty-cat type="tabby">Meow</kitty-cat>'} />
				<Code
					className="define"
					lang="javascript"
					text={'window.customElements.define("kitty-cat", KittyCat);'}
				/>
				<Code
					className="class"
					lang="javascript"
					text={'class KittyCat extends HTMLElement { ... }'}
				/>
			</Fragment>
		)
	}
}
