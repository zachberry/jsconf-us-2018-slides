import './slides.css'

import React, { Component, Fragment } from 'react'

import Code from '../components/code'

export default class SlideContent extends Component {
	static get name() {
		return 'midi-5'
	}

	static get steps() {
		return [1, 2, 3, 4]
	}

	render() {
		return (
			<Fragment>
				<h1>WebMIDI</h1>
				<Code
					lang="javascript"
					step={this.props.step}
					steps={[[1, 5], [2, 4], [3], [7, 8, 9]]}
					text={`navigator.requestMIDIAccess().then((midiAccess) => {
	for (let input of midiAccess.inputs.values()) {
		input.addEventListener('midimessage', onMIDIMessage)
	}
})

function onMIDIMessage(event) {
	console.log(event.data) //Uint8Array[0x90, 0x3C, 0x7F]
}`}
				/>
			</Fragment>
		)
	}
}
