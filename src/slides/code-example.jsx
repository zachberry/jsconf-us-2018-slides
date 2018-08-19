import './slides.css'

import React, { Component, Fragment } from 'react'
import Code from '../components/code'
// import AceEditor from 'react-ace'

// import 'brace/mode/javascript'
// import 'brace/theme/monokai'

export default class SlideContent extends Component {
	static get name() {
		return 'code-example'
	}

	render() {
		return (
			<Fragment>
				<h1>Code Examples:</h1>

				<a target="_blank" href="http://bit.ly/jsconf-vs">
					bit.ly/jsconf-vs
				</a>
			</Fragment>
		)
	}
}
