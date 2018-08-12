import './slides.css'

import React, { Component, Fragment } from 'react'
import Code from '../components/code'

const CODE_TEXT = `class MyNode extends N {
	onReady() {}
	onDestroy() {}
	onAttrChanged(name, oldValue, newValue) {}
	send(outputName, outputValue) {}
	onInputDisconnected(name, numConnections, numNodes) {}
	onOutputDisconnected(name, numConnections, numNodes) {}
	onScreenDestroy() {}
	onScreenUpdated() {}
}`

export default class SlideContent extends Component {
	static get name() {
		return 'node-api'
	}

	static get steps() {
		return [1, 2, 3, 4, 5]
	}

	render() {
		return (
			<Fragment>
				<h1>Node:</h1>
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
