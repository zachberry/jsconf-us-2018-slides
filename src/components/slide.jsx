// import './slides.css'

import React, { Component } from 'react'

class Slide extends Component {
	constructor(props) {
		super(props)

		// this.state = { sf: 1 }
	}

	// componentDidMount() {
	// 	this.updateSize()
	// }

	// componentDidUpdate() {
	// 	this.updateSize()
	// }

	// updateSize() {
	// 	let sf = Math.min(
	// 		this.props.windowWidth / C.SLIDE_WIDTH,
	// 		this.props.windowHeight / C.SLIDE_HEIGHT
	// 	)

	// 	// this.setState({
	// 	// 	sf
	// 	// })
	// 	console.log('hey', `translate(-50%, -50%) scale(${sf})`)
	// 	this.refs.content.style.transform = `translate(-50%, -50%) scale(${sf})`
	// }

	render() {
		console.log('sc', this.props.content)
		let SC = this.props.content

		return (
			<div
				className={
					'slide ' +
					this.props.content.name +
					' ' +
					this.props.content.classes +
					(this.props.isCurrentSlide ? ' is-current-slide' : ' is-not-current-slide') +
					' step-' +
					this.props.currentStep +
					' ' +
					(this.props.steps || []).map(step => 'did-step-' + step).join(' ')
				}
				ref="self"
			>
				<div
					ref="content"
					className="content"
					style={{ transform: `translate(-50%, -50%) scale(${this.props.sf})` }}
				>
					<SC isCurrentSlide={this.props.isCurrentSlide} step={this.props.currentStep} />
				</div>
			</div>
		)
	}
}

export default Slide
