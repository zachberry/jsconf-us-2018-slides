import './slides.css'

import React, { Component, Fragment } from 'react'
import Code from '../components/code'
// import AceEditor from 'react-ace'

// import 'brace/mode/javascript'
// import 'brace/theme/monokai'

const CODE_TEXT = `class N extends BaseNode {
	static get inputs() {
		return [
			{
				name: 'my-input',
				observe: true,
				defaultValue: 0,
				restrict: Number
			}
		]
	}

	static get outputs() { return ['my-output'] }

	readyCallback() {} //
	destroyCallback() {} //
	attributeChangedCallback() {} //
	screenUpdatedCallback() {} //
	screenDestroyCallback() {} //
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
				<Code
					lang="javascript"
					text={CODE_TEXT}
					steps={[[0, 9], [0, 1, 9], [0, 2, 9], [0, 3, 9], [0, 5, 6, 7, 8, 9]]}
					step={this.props.step}
				/>
			</Fragment>
		)
	}
}
