import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import WebcamPanel from './components/webcam-panel'
import SlideShow from './components/slide-show'
import SlideShowControls from './components/slide-show-controls'
import slides from './slides/slides'
import Footer from './components/footer'
import * as C from './config'

const KEYCODE_LEFT_ARROW = 37
const KEYCODE_RIGHT_ARROW = 39
const KEYCODE_SPACE = 13

class App extends Component {
	constructor(props) {
		super(props)

		this.boundOnWebcamPanelToggle = this.onWebcamPanelToggle.bind(this)
		this.boundOnKeyUp = this.onKeyUp.bind(this)
		this.boundOnClickPrev = this.gotoPrevItem.bind(this)
		this.boundOnClickNext = this.gotoNextItem.bind(this)

		// get slide steps
		this.allSteps = []
		this.stepsBySlide = new Map()
		slides.forEach(slide => {
			let steps = slide.steps || ['default']
			this.stepsBySlide.set(slide, steps)

			steps.forEach(step => {
				this.allSteps.push({
					slide,
					step,
					steps
				})
			})
		})

		console.log('allSteps', this.allSteps)

		// let currentSlideIndex = parseInt(window.localStorage.currentSlideIndex) || 0
		// let currentSlide

		this.state = {
			webcamExpanded: false,
			currentSlideIndex: parseInt(window.localStorage.currentSlideIndex) || 0,
			currentStepIndex: parseInt(window.localStorage.currentStepIndex) || 0,
			// currentSlideIndex: 0,
			sf: 1
		}
	}

	onResize(event) {
		let sf = Math.min(window.innerWidth / C.SLIDE_WIDTH, window.innerHeight / C.SLIDE_HEIGHT)

		this.setState({
			sf
		})
	}

	onWebcamPanelToggle() {
		this.setState({
			webcamExpanded: !this.state.webcamExpanded
		})
	}

	onKeyUp(event) {
		switch (event.keyCode) {
			case KEYCODE_LEFT_ARROW:
				this.gotoPrevItem()
				break

			case KEYCODE_RIGHT_ARROW:
			case KEYCODE_SPACE:
				this.gotoNextItem()
				break
		}
	}

	gotoNextItem() {
		if (this.state.currentStepIndex === this.allSteps.length - 1) return

		let nextStep = this.allSteps[this.state.currentStepIndex + 1]
		let currentSlide = slides[this.state.currentSlideIndex]

		if (nextStep.slide !== currentSlide) {
			this.setState({
				currentSlideIndex: this.state.currentSlideIndex + 1
			})
		}

		this.setState({
			currentStepIndex: this.state.currentStepIndex + 1
		})

		window.localStorage.currentSlideIndex = this.state.currentSlideIndex
		window.localStorage.currentStepIndex = this.state.currentStepIndex
	}

	gotoPrevItem() {
		console.log('GTPI')
		if (this.state.currentStepIndex === 0) return

		let prevStep = this.allSteps[this.state.currentStepIndex - 1]
		let currentSlide = slides[this.state.currentSlideIndex]

		if (prevStep.slide !== currentSlide) {
			this.setState({
				currentSlideIndex: this.state.currentSlideIndex - 1
			})
		}

		this.setState({
			currentStepIndex: this.state.currentStepIndex - 1
		})

		window.localStorage.currentSlideIndex = this.state.currentSlideIndex
		window.localStorage.currentStepIndex = this.state.currentStepIndex
	}

	componentDidMount() {
		document.addEventListener('keyup', this.boundOnKeyUp)
		window.addEventListener('resize', this.onResize.bind(this))
		this.onResize()
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<SlideShow
					sf={this.state.sf}
					currentSlideIndex={this.state.currentSlideIndex}
					currentStepIndex={this.state.currentStepIndex}
					slides={slides}
					steps={this.allSteps}
				/>
				<SlideShowControls goPrev={this.boundOnClickPrev} goNext={this.boundOnClickNext} />
				<WebcamPanel
					expanded={this.state.webcamExpanded}
					onToggle={this.boundOnWebcamPanelToggle}
				/>
				<Footer />
			</div>
		)
	}
}

export default App
