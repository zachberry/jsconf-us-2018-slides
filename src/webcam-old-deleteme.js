import React from 'react';

export default class Webcam extends React.Component {
	constructor(props) {
		super(props)

		this.boundOnChange = this.onChange.bind(this)


		// this.state = {
		// 	videoDevices: {},
		// 	selectedDeviceId: null
		// }
		this.videoDevices = {}
	}

	onChange(event) {

		this.getStream(event)
	}

	getStream() {
		if (window.stream) {
			window.stream.getTracks().forEach(function (track) {
				track.stop()
			})
		}

		let id = this.refs.select.value

		var constraints = {
			audio: {
				deviceId: { exact: 'default' }
			},
			video: {
				deviceId: { exact: id }
			}
		};

		setTimeout(() => {
			// this.setState({
			// 	selectedDeviceId: this.videoDevices[event.target.value].deviceId
			// })
			navigator.mediaDevices.getUserMedia(constraints).then(this.gotStream.bind(this))

		}, 1000)
	}


	gotDevices(devices) {


		//devices.forEach((device) => {
		console.log(devices)
		let videoDevices = {}
		devices.filter(device => device.kind === 'videoinput').forEach((device) => {
			console.log('yo', device)
			videoDevices[device.deviceId] = device.deviceId
		})
		// this.setState({ videoDevices })
		this.videoDevices = videoDevices
		this.forceUpdate()
		// console.log(videoDevices, [...videoDevices])

		// devices.forEach(device => {
		// 	console.log('found device', device)
		// 	let id = device.deviceId
		// 	navigator.mediaDevices.getUserMedia({
		// 		video: {
		// 			exact: id
		// 		}
		// 	}).then(stream => {
		// 		console.log('found stream', stream)
		// 		stream.getTracks().forEach((track) => {
		// 			console.log('found track', track)
		// 		})
		// 	})
		// })


	}

	componentDidMount() {
		navigator.mediaDevices.enumerateDevices()
			.then(this.gotDevices.bind(this)).then(this.getStream.bind(this))

		// navigator.mediaDevices.getUserMedia({ video: true })
		// 	.then((stream) => {
		// 		let videoTracks = stream.getVideoTracks()
		// 		console.log(videoTracks)

		// 	})
	}

	componentDidUpdate() {



	}

	gotStream(stream) {

		window.stream = stream
		console.log('got stream', stream)

		// stream.getTracks().forEach((track) => {
		// 	console.log('new track', track)
		// })

		this.refs.video.srcObject = stream
	}



	render() {
		return <div>
			<select ref="select" onChange={this.boundOnChange}>
				<option>null</option>
				{
					Object.keys(this.videoDevices).map((deviceId) => {
						return <option key={deviceId} value={deviceId}>{deviceId}</option>
					})
				}
			</select>
			<video autoPlay={true} ref="video" />
		</div>
	}
}