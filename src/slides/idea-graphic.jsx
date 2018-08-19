import './slides.css'

import ideaGraphic from './idea-graphic.svg'
import wires from './wires.svg'
import mouseOutline from './mouse-outline.svg'
import mouse from './mouse.svg'
import gamepadOutline from './gamepad-outline.svg'
import gamepad from './gamepad.svg'
import mediaOutline from './media-outline.svg'
import media from './media.svg'
import drum from './drum-small.svg'
import drumOutline from './drum-outline.svg'
import bubble from './small-bubble.svg'

import React, { Component, Fragment } from 'react'

export default class SlideContent extends Component {
	static get name() {
		return 'idea-graphic'
	}

	static get steps() {
		return ['start', 'devices', 'speak', 'wires', 'show-h1s', 'circles']
	}

	constructor(props) {
		super(props)

		this.state = {
			x: 0,
			y: 0,
			vol: 0,
			midiData: [0, 0, 0],
			axis: 0
		}

		// return

		// Mouse
		this.boundMouseMove = this.mouseMove.bind(this)
		document.addEventListener('mousemove', this.boundMouseMove)

		// Audio
		this.boundOnAudioProcess = this.onAudioProcess.bind(this)
		navigator.getUserMedia(
			{ audio: true },
			this.onGetUserMediaSuccess.bind(this),
			this.onGetUserMediaError.bind(this)
		)

		// MIDI
		this.boundOnMIDIMessage = this.onMIDIMessage.bind(this)
		navigator.requestMIDIAccess().then(this.onMIDISuccess.bind(this), this.onMIDIFailure.bind(this))

		// Gamepads
		this.pollActive = true
		this.boundPoll = this.poll.bind(this)
		window.requestAnimationFrame(this.boundPoll)
	}

	poll() {
		if (!this.pollActive) return

		let gamepads = navigator.getGamepads()

		if (gamepads[0] && gamepads[0].axes) {
			this.setState({
				axis: gamepads[0].axes[0]
			})
		}

		window.requestAnimationFrame(this.boundPoll)
	}

	onMIDIFailure(e) {
		console.log('Midi failure', e)
	}

	onMIDISuccess(midiAccess) {
		this.inputs = midiAccess.inputs
		for (let input of this.inputs.values()) {
			input.addEventListener('midimessage', this.boundOnMIDIMessage)
		}
	}

	onMIDIMessage(event) {
		let type = event.data[0] >> 4
		if (type !== 0x9 && type !== 0x8) return

		let data = Array.from(event.data).concat([0, 0, 0])
		this.setState({
			midiData: data
		})
	}

	onGetUserMediaSuccess(stream) {
		this.listen(stream)
	}

	listen(stream) {
		this.context = new AudioContext()
		this.analyser = this.context.createAnalyser()
		this.analyser.smoothingTimeConstant = 0.3
		this.analyser.fftSize = 1024

		this.node = this.context.createScriptProcessor(this.analyser.fftSize * 2, 1, 1)

		this.input = this.context.createMediaStreamSource(stream)
		this.input.connect(this.analyser)
		this.analyser.connect(this.node)
		this.node.connect(this.context.destination)

		this.node.onaudioprocess = this.boundOnAudioProcess
	}

	onAudioProcess() {
		this.spectrum = new Uint8Array(this.analyser.frequencyBinCount)
		this.analyser.getByteFrequencyData(this.spectrum)
		this.vol = this.getRMS(this.spectrum)

		this.setState({
			vol: this.vol
		})
	}

	getRMS(spectrum) {
		let rms = 0
		for (let i = 0, len = spectrum.length; i < len; i++) {
			rms += spectrum[i] * spectrum[i]
		}
		rms /= spectrum.length
		rms = Math.sqrt(rms)

		return rms
	}

	onGetUserMediaError(e) {
		console.error('Media error', e)
	}

	mouseMove(event) {
		this.setState({
			x: event.clientX,
			y: event.clientY
		})
	}

	componentWillUnmount() {
		document.removeEventListener('mousemove', this.boundMouseMove)
		this.node.onaudioprocess = null
		delete this.node.onaudioprocess
		this.node = null
		delete this.node
	}

	render() {
		return (
			<div className="wrapper">
				{/* <img className="bg" src={ideaGraphic} /> */}
				<h1 className="webmidi-api">WebMIDI API</h1>
				<h1 className="media-api">Media Capture &amp; Streams</h1>
				<h1 className="gamepad-api">Gamepad API</h1>
				<h1 className="dom-events">DOM Events</h1>

				<div className="hide hide-webmidi" />
				<div className="hide hide-gamepad" />
				<div className="hide hide-media" />
				<div className="hide hide-dom" />

				<img className="gamepad-outline" src={gamepadOutline} />
				<div className="hide-outline hide-gamepad-outline" />

				<img className="media-outline" src={mediaOutline} />
				<div className="hide-outline hide-media-outline" />

				<img className="drum-outline" src={drumOutline} />
				<div className="hide-outline hide-drum-outline" />

				<img className="mouse-outline" src={mouseOutline} />
				<div className="hide-outline hide-mouse-outline" />

				<svg
					className="wires"
					xmlns="http://www.w3.org/2000/svg"
					width="1215.3333"
					height="621.9688"
					viewBox="0 0 1215.3333 621.9688"
				>
					<polyline
						class="cls-3"
						points="259.833 409.105 720.086 409.105 720.086 323.105 1208.833 323.105"
					/>
					<polyline
						class="cls-4"
						points="470.333 275.605 744.833 275.605 744.833 296.605 1207.333 296.605"
					/>
					<polyline
						class="cls-5"
						points="571.833 515.105 744.833 515.105 744.833 349.105 1209.833 349.105"
					/>
					<polyline
						class="cls-6"
						points="340.833 142.105 767.333 142.105 767.333 272.105 1209.833 272.105"
					/>
				</svg>

				<div className="bubble drum-bubble">
					<img src={bubble} />
					<span>
						{this.state.midiData[0]
							.toString(16)
							.padStart(2, '0')
							.toUpperCase()}
						{this.state.midiData[1]
							.toString(16)
							.padStart(2, '0')
							.toUpperCase()}
						{this.state.midiData[2]
							.toString(16)
							.padStart(2, '0')
							.toUpperCase()}
					</span>
				</div>
				<div className="bubble gamepad-bubble">
					<img src={bubble} />
					<span>{this.state.axis}</span>
				</div>
				<div className="bubble media-bubble">
					<img src={bubble} />
					<span>vol:{Math.round(this.state.vol)}</span>
				</div>
				<div className="bubble mouse-bubble">
					<img src={bubble} />
					<span>
						x: {this.state.x}
						<br />y: {this.state.y}
					</span>
				</div>

				<div className="circle circle-mouse" />
				<div className="circle circle-gamepad" />
				<div className="circle circle-media" />
				<div className="circle circle-drum" />

				<img className="device mouse" src={mouse} />
				<img className="device gamepad" src={gamepad} />
				<img className="device media" src={media} />
				<img className="device drum" src={drum} />
			</div>
		)
	}
}
