import './slides.css'

import React, { Component, Fragment } from 'react'
import Code from '../components/code'

const CODE_TEXT = `class MyNode extends N {
	static get inputs() { return [{
		name: 'my-input',
		observe: true,
		defaultValue: 0,
		restrict: Number
	}]}
	static get outputs() { return ['my-output'] }
	onReady() {}
	onRemove() {}
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
		return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
	}

	render() {
		return (
			<Fragment>
				<Code
					lang="javascript"
					text={CODE_TEXT}
					steps={[
						[1, 17],
						[2, 7],
						[3],
						[4],
						[5],
						[6],
						[8],
						[9],
						[10],
						[11],
						[12],
						[13, 14],
						[15, 16]
					]}
					step={this.props.step}
				/>
			</Fragment>
		)
	}
}
