import './slide-show.css'

import React, { Component } from 'react'

import NullSlide from '../slides/null-slide'
import Slide from './slide'

const SLIDE_TRANSITION_MS = 500

class SlideShow extends Component {
	constructor(props) {
		super(props)

		this.state = {
			movement: 'idle',
			currentSlideIndex: props.currentSlideIndex,
			currentStepIndex: props.currentStepIndex
		}
	}

	moveToSlide() {
		let i = 0
		if (this.state.currentSlideIndex < this.props.currentSlideIndex) {
			i = 1
		} else if (this.state.currentSlideIndex > this.props.currentSlideIndex) {
			i = -1
		}

		if (i === 0) return

		this.setState({
			currentSlideIndex: this.state.currentSlideIndex + i,
			currentStepIndex: this.state.currentStepIndex + i,
			movement: 'idle'
		})

		this.updateSlide(this.props.currentSlideIndex, this.props.currentStepIndex)
	}

	componentWillReceiveProps(nextProps) {
		this.updateSlide(nextProps.currentSlideIndex, nextProps.currentStepIndex)
	}

	updateSlide(currentSlideIndex, currentStepIndex) {
		if (currentSlideIndex < this.state.currentSlideIndex) {
			this.setState({ movement: 'left' })
			setTimeout(this.moveToSlide.bind(this), SLIDE_TRANSITION_MS)
		} else if (currentSlideIndex > this.state.currentSlideIndex) {
			this.setState({ movement: 'right' })
			setTimeout(this.moveToSlide.bind(this), SLIDE_TRANSITION_MS)
		} else {
			this.setState({ currentStepIndex })
		}
	}

	//@TODO: These functions are trash, should compute this once
	getLastStepIndexForPrevSlide(stepIndex, targetSlide) {
		let step = this.props.steps[stepIndex]
		while (step && step.slide !== targetSlide) {
			stepIndex--
			step = this.props.steps[stepIndex]
		}

		return stepIndex
	}
	getFirstStepIndexForNextSlide(stepIndex, targetSlide) {
		let step = this.props.steps[stepIndex]
		while (step && step.slide !== targetSlide) {
			stepIndex++
			step = this.props.steps[stepIndex]
		}

		return stepIndex
	}

	render() {
		let PrevSlide =
			this.state.currentSlideIndex > 0
				? this.props.slides[this.state.currentSlideIndex - 1]
				: NullSlide
		let CurrentSlide = this.props.slides[this.state.currentSlideIndex]
		let NextSlide =
			this.state.currentSlideIndex < this.props.slides.length - 1
				? this.props.slides[this.state.currentSlideIndex + 1]
				: NullSlide

		let currentSlideData = this.props.steps[this.state.currentStepIndex]
		let prevStepIndex = this.getLastStepIndexForPrevSlide(this.state.currentStepIndex, PrevSlide)
		let nextStepIndex = this.getFirstStepIndexForNextSlide(this.state.currentStepIndex, NextSlide)
		let prevSlideData = this.props.steps[prevStepIndex]
		let nextSlideData = this.props.steps[nextStepIndex]

		return (
			<div className={'slide-show is-movement-' + this.state.movement}>
				<div className="container">
					{[
						PrevSlide ? (
							<Slide
								key={PrevSlide.name}
								isCurrentSlide={false}
								sf={this.props.sf}
								vidKidURL={this.props.vidKidURL}
								content={PrevSlide}
								currentStep={prevSlideData ? prevSlideData.step : null}
								steps={prevSlideData ? prevSlideData.steps : []}
							/>
						) : null,
						// <CurrentSlide sf={this.state.sf} />,
						<Slide
							key={CurrentSlide.name}
							isCurrentSlide={true}
							currentStep={currentSlideData.step}
							steps={currentSlideData.steps.slice(
								0,
								currentSlideData.steps.indexOf(currentSlideData.step) + 1
							)}
							sf={this.props.sf}
							vidKidURL={this.props.vidKidURL}
							content={CurrentSlide}
						/>,
						NextSlide ? (
							<Slide
								key={NextSlide.name}
								isCurrentSlide={false}
								sf={this.props.sf}
								vidKidURL={this.props.vidKidURL}
								content={NextSlide}
								currentStep={nextSlideData ? nextSlideData.step : null}
								steps={
									nextSlideData
										? nextSlideData.steps.slice(
												0,
												nextSlideData.steps.indexOf(nextSlideData.step) + 1
										  )
										: null
								}
							/>
						) : null
					]}
				</div>
			</div>
		)
	}
}

export default SlideShow
