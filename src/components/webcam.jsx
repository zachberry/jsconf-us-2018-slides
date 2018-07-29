import './webcam.css'

import React from 'react'

export default class Webcam extends React.Component {
	constructor(props) {
		super(props)

		this.boundOnChange = this.onChange.bind(this)

		this.state = {
			videoDevices: {},
			selectedDeviceId: null
		}
	}

	onChange(event) {
		this.setActiveStream(event)
	}

	setActiveStream() {
		this.needsStreamUpdate = true

		let id = this.refs.select.value
		this.setState({
			selectedDeviceId: id
		})
	}

	createVideoDeviceList(devices) {
		let videoDevices = {}
		devices.filter(device => device.kind === 'videoinput').forEach(device => {
			videoDevices[device.deviceId] = device.deviceId
		})
		this.setState({ videoDevices })
	}

	stopStream(stream) {
		stream.getTracks().forEach(function(track) {
			track.stop()
		})
	}

	setVideoToStream(stream) {
		this.activeStream = stream
		this.refs.video.srcObject = stream
	}

	componentDidMount() {
		return
		navigator.mediaDevices
			.enumerateDevices()
			.then(this.createVideoDeviceList.bind(this))
			.then(this.setActiveStream.bind(this))
	}

	componentDidUpdate() {
		if (!this.needsStreamUpdate) return

		delete this.needsStreamUpdate

		if (this.activeStream) this.stopStream(this.activeStream)

		navigator.mediaDevices
			.getUserMedia({
				video: {
					deviceId: { exact: this.state.selectedDeviceId }
				}
			})
			.then(this.setVideoToStream.bind(this))
	}

	render() {
		return (
			<div className="webcam">
				<div className="container">
					<video autoPlay={true} muted ref="video" />
					<select ref="select" onChange={this.boundOnChange}>
						{Object.keys(this.state.videoDevices).map((deviceId, index) => {
							return (
								<option key={deviceId} value={deviceId}>
									{'Video ' + (index + 1)}
								</option>
							)
						})}
					</select>
				</div>
			</div>
		)
	}
}
