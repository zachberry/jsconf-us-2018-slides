import './slide-show.css'

import React, { Component } from 'react'

import NullSlide from '../slides/null-slide'
import Slide from '../components/slide'

const SLIDE_TRANSITION_MS = 5000

class SlideShow extends Component {
	constructor(props) {
		super(props)

		this.state = {
			movement: 'idle',
			currentSlideIndex: props.currentSlideIndex
		}
	}

	moveToSlide() {
		let i = 0
		if (this.state.currentSlideIndex < this.props.currentSlideIndex) {
			i = 1
		} else if (this.state.currentSlideIndex > this.props.currentSlideIndex) {
			i = -1
		}

		console.log('moveToSlide by', i)

		if (i === 0) return

		this.setState({
			currentSlideIndex: this.state.currentSlideIndex + i,
			movement: 'idle'
		})

		this.updateSlide(this.props.currentSlideIndex)
	}

	componentWillReceiveProps(nextProps) {
		this.updateSlide(nextProps.currentSlideIndex)
	}

	updateSlide(currentSlideIndex) {
		console.log('updateSlide from', this.state.currentSlideIndex, 'to', currentSlideIndex)

		if (currentSlideIndex < this.state.currentSlideIndex) {
			this.setState({ movement: 'left' })
			setTimeout(this.moveToSlide.bind(this), SLIDE_TRANSITION_MS)
		} else if (currentSlideIndex > this.state.currentSlideIndex) {
			this.setState({ movement: 'right' })
			setTimeout(this.moveToSlide.bind(this), SLIDE_TRANSITION_MS)
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
		console.log(this.props.slides)
		let PrevSlide =
			this.state.currentSlideIndex > 0
				? this.props.slides[this.state.currentSlideIndex - 1]
				: NullSlide
		let CurrentSlide = this.props.slides[this.state.currentSlideIndex]
		let NextSlide =
			this.state.currentSlideIndex < this.props.slides.length - 1
				? this.props.slides[this.state.currentSlideIndex + 1]
				: NullSlide

		// debugger
		console.log('what is', this.props)

		let currentSlideData = this.props.steps[this.props.currentStepIndex]
		let prevStepIndex = this.getLastStepIndexForPrevSlide(this.props.currentStepIndex, PrevSlide)
		let nextStepIndex = this.getFirstStepIndexForNextSlide(this.props.currentStepIndex, NextSlide)
		let prevSlideData = this.props.steps[prevStepIndex]
		let nextSlideData = this.props.steps[nextStepIndex]
		//let nextSlideData = this.props.steps[this.props.current]

		console.log(prevStepIndex, nextStepIndex, prevSlideData, currentSlideData, nextSlideData)

		return (
			<div className={'slide-show is-movement-' + this.state.movement}>
				<div className="container">
					{[
						PrevSlide ? (
							<Slide
								key={PrevSlide.name}
								isCurrentSlide={false}
								sf={this.props.sf}
								content={PrevSlide}
								currentStep={prevSlideData.step}
								steps={prevSlideData.steps}
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
							content={CurrentSlide}
						/>,
						NextSlide ? (
							<Slide
								key={NextSlide.name}
								isCurrentSlide={false}
								sf={this.props.sf}
								content={NextSlide}
								currentStep={nextSlideData.step}
								steps={nextSlideData.steps.slice(
									0,
									nextSlideData.steps.indexOf(nextSlideData.step) + 1
								)}
							/>
						) : null
					]}
				</div>
			</div>
		)
	}
}

export default SlideShow
