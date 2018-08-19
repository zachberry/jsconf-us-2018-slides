import './slides.css'

import React, { Component, Fragment } from 'react'
import Code from '../components/code'

const CODE_TEXT = `navigator.getUserMedia(
	{ video: true }, // Constraints: Ask for video
  // Success callback:
	(stream) => {
    let videoEl = document.createElement('video')
    document.body.appendChild(videoEl);
	  videoEl.srcObject = stream;
	  videoEl.play();
  },
  // Error callback:
	(error) => {
    console.error(error);
  }
);`

export default class SlideContent extends Component {
	static get name() {
		return 'video-simple'
	}

	static get steps() {
		return [1, 2, 3, 4, 5, 6]
	}

	render() {
		return (
			<Fragment>
				<h1>Webcam</h1>
				<Code
					lang="javascript"
					text={CODE_TEXT}
					steps={[null, [1, 2, 14], [3, 4, 9], [5, 6], [7, 8]]}
					step={this.props.step}
				/>
				<a className="bitly" target="_blank" href="http://bit.ly/jsconf-vs">
					bit.ly/jsconf-vs
				</a>
			</Fragment>
		)
	}
}
