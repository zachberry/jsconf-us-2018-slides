import './slide-show-controls.css'

import React, { Component } from 'react'

class SlideShowControls extends Component {
	render() {
		return (
			<div className="slide-show-controls">
				<button className="prev" onClick={this.props.goPrev}>
					&larr;
				</button>
				<button className="next" onClick={this.props.goNext}>
					&rarr;
				</button>
			</div>
		)
	}
}

export default SlideShowControls
