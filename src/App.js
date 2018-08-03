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
		this.boundOnWebcamPanelClose = this.onWebcamPanelClose.bind(this)
		this.boundOnWebcamSummon = this.onWebcamSummon.bind(this)

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
		console.log('stepsBySlide', this.stepsBySlide)

		// let currentSlideIndex = parseInt(window.localStorage.currentSlideIndex) || 0
		// let currentSlide
		let indexFromHash = this.getIndexFromHash()
		console.log('IFH', indexFromHash)

		this.state = {
			webcamExpanded: Boolean(window.localStorage.webcamExpanded === 'true') || false,
			webcamSummoned: Boolean(window.localStorage.webcamSummoned === 'true') || false,
			currentSlideIndex: indexFromHash.slide,
			currentStepIndex: indexFromHash.step,
			// currentSlideIndex: 0,
			sf: 1
		}
	}

	getIndexFromHash() {
		let h = ('' + window.location.hash).replace('#', '')
		let n = parseInt(h, 10) || 0

		for (let i = 0, len = this.allSteps.length; i < len; i++) {
			if (this.allSteps[i].slide === slides[n]) {
				return { step: i, slide: n }
			}
		}

		return { step: 0, slide: 0 }
	}

	onResize(event) {
		let sf = Math.min(window.innerWidth / C.SLIDE_WIDTH, window.innerHeight / C.SLIDE_HEIGHT)

		this.setState({
			sf
		})
	}

	onWebcamPanelClose() {
		this.setState({
			webcamSummoned: false,
			webcamExpanded: false
		})
		window.localStorage.webcamSummoned = false
		window.localStorage.webcamExpanded = false
	}

	onWebcamSummon() {
		console.log('ows')
		this.setState({
			webcamSummoned: true
		})
		window.localStorage.webcamSummoned = true
	}

	onWebcamPanelToggle() {
		let newValue = !this.state.webcamExpanded

		this.setState({
			webcamExpanded: newValue
		})
		window.localStorage.webcamExpanded = newValue
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

			// debugger

			// console.log('weeeeee', currentSlide, currentSlide.prototype.features)
			let wantsWebcam = nextStep.slide.features && nextStep.slide.features.indexOf('webcam') > -1
			if (wantsWebcam) {
				this.onWebcamSummon()
			} else {
				this.onWebcamPanelClose()
			}
		}

		this.setState({
			currentStepIndex: this.state.currentStepIndex + 1
		})

		window.location.hash = this.state.currentSlideIndex
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

			let wantsWebcam = prevStep.slide.features && prevStep.slide.features.indexOf('webcam') > -1
			if (wantsWebcam) {
				this.onWebcamSummon()
			} else {
				this.onWebcamPanelClose()
			}
		}

		this.setState({
			currentStepIndex: this.state.currentStepIndex - 1
		})

		window.location.hash = this.state.currentSlideIndex // + ':' + this.state.currentSlideIndex
		// window.localStorage.currentSlideIndex = this.state.currentSlideIndex
		// window.localStorage.currentStepIndex = this.state.currentStepIndex
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
					onClose={this.boundOnWebcamPanelClose}
					onSummon={this.boundOnWebcamSummon}
					isSummoned={this.state.webcamSummoned}
				/>
				<Footer />
			</div>
		)
	}
}

export default App
