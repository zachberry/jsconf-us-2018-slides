import './slides.css'

import React, { Component, Fragment } from 'react'
import Code from '../components/code'

const CODE_TEXT = `navigator.getUserMedia(
	{ video: true }, // Ask for video
	onGetUserMediaSuccess,
	onError
);

function onError(e) { console.error(e) }

function onGetUserMediaSuccess() {
	navigator.mediaDevices.enumerateDevices().then(devices => {
		devices.forEach(device => {
			if (device.kind === "videoinput") {
				console.log(device); // InputDeviceInfo { deviceId, label, ...}
				getStream(device.deviceId);
			}
		});
	});
}

function getStream(id) {
	let constraints = { deviceId: { exact: id } };
	navigator.getUserMedia(
		{ video: constraints },
		onGetDeviceSuccess,
		onError
	);
}

function onGetDeviceSuccess(stream) {
	console.log(stream); //MediaStream
	let videoEl = document.createElement('video');
  document.body.appendChild(videoEl);
	videoEl.srcObject = stream;
	videoEl.play();
}`

export default class SlideContent extends Component {
	static get name() {
		return 'video'
	}

	static get steps() {
		return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
	}

	render() {
		return (
			<div className="slider">
				<Code
					lang="javascript"
					text={CODE_TEXT}
					steps={[
						null,
						[1, 2, 5],
						[3, 4],
						[9, 18],
						[10, 17],
						[11, 16],
						[12, 15],
						[13, 14],
						[20, 27],
						[21],
						[21, 22, 23, 24, 25, 26],
						[29, 35],
						[30, 31],
						[32, 33],
						[34]
					]}
					step={this.props.step}
				/>
				<a target="_blank" href="https://codepen.io/zachberry/pen/gjyajp?editors=0010#0">
					http://bit.ly/js-vid
				</a>
			</div>
		)
	}
}
