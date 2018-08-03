import './vid-kid.css'

import React, { Component } from 'react'

class VidKid extends Component {
	render() {
		return (
			<iframe
				className="vid-kid"
				allow="camera; microphone; midi"
				src={'http://localhost:3002/#' + btoa(JSON.stringify(this.props.doc))}
			/>
		)
	}
}

export default VidKid
