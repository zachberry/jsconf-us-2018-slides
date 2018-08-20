import './slides.css'

import tv from './tv.svg'
import tvFrame from './tv-frame.svg'
import tri from './tri.svg'

import anime from 'animejs'

import React, { Component, Fragment } from 'react'

export default class SlideContent extends Component {
	static get name() {
		return 'idea-graphic-2'
	}

	static get steps() {
		return ['start', 'fade', 'change-1', 'change-2', 'restore', 'zoom']
	}

	componentDidMount() {
		const redPath = anime.path('.slide.idea-graphic-2 .wires .cls-5')
		const yellowPath = anime.path('.slide.idea-graphic-2 .wires .cls-4')
		const bluePath = anime.path('.slide.idea-graphic-2 .wires .cls-3')
		const purplePath = anime.path('.slide.idea-graphic-2 .wires .cls-6')

		this.motionPath1 = anime({
			targets: '.red-wire-circle',
			translateX: redPath('x'),
			translateY: redPath('y'),
			easing: 'linear',
			duration: 1000,
			loop: true
		})
		this.motionPath2 = anime({
			targets: '.yellow-wire-circle',
			translateX: yellowPath('x'),
			translateY: yellowPath('y'),
			easing: 'linear',
			duration: 800,
			loop: true
		})
		this.motionPath3 = anime({
			targets: '.blue-wire-circle',
			translateX: bluePath('x'),
			translateY: bluePath('y'),
			easing: 'linear',
			duration: 600,
			loop: true
		})
		this.motionPath4 = anime({
			targets: '.purple-wire-circle',
			translateX: purplePath('x'),
			translateY: purplePath('y'),
			easing: 'linear',
			duration: 600,
			loop: true,
			direction: 'reverse'
		})
	}

	componentWillUnmount() {
		this.motionPath1.pause()
		this.motionPath2.pause()
		this.motionPath3.pause()
		this.motionPath4.pause()
	}

	render() {
		return (
			<div className="wrapper">
				{/* <img className="bg" src={ideaGraphic2} /> */}

				<svg
					className="wires"
					xmlns="http://www.w3.org/2000/svg"
					width="1075.3167"
					height="621.9688"
					viewBox="0 0 1075.3167 621.9688"
				>
					<g id="Layer_3" data-name="Layer 3">
						<g className="cls-1">
							<rect className="cls-2" x="80.5117" y="0.3458" width="994.459" height="621.2769" />
							<path
								d="M994.459.6911V621.2776H.6911V.6911H994.459M995.15,0H0V621.9688H995.15Z"
								transform="translate(80.1667)"
							/>
						</g>
					</g>
					<g id="Layer_2" data-name="Layer 2">
						<polyline
							className="cls-3"
							points="5.5 323.484 196.5 323.484 196.5 166.484 439.994 166.484"
						/>

						<polyline
							className="cls-5"
							points="5.5 272.484 165.558 272.484 165.558 67.484 920.171 67.484 920.171 178.816"
						/>

						<polyline
							className="cls-6"
							points="388.083 444.767 251.909 444.767 251.909 349.484 5.5 349.484"
						/>
						<circle fill="#ea4600" className="wire-circle red-wire-circle" r="15" />
						<circle fill="#008cff" className="wire-circle blue-wire-circle" r="15" />
						<polyline
							className="cls-4 mouse-line"
							points="5.5 296.982 532.467 296.982 532.467 399.814 678.051 399.814"
						/>
						<circle fill="#f4d451" className="wire-circle yellow-wire-circle" r="15" />
						<circle fill="#950099" className="wire-circle purple-wire-circle" r="15" />
					</g>
				</svg>

				<svg
					className="wires-internal pulse"
					xmlns="http://www.w3.org/2000/svg"
					width="995.15"
					height="621.9688"
					viewBox="0 0 995.15 621.9688"
				>
					<g id="Layer_3" data-name="Layer 3">
						<g className="cls-1">
							<rect className="cls-2" x="0.345" y="0.3458" width="994.459" height="621.2769" />
							<path d="M994.459.6911V621.2776H.6911V.6911H994.459M995.15,0H0V621.9688H995.15Z" />
						</g>
					</g>
					<g id="Layer_2" data-name="Layer 2">
						<polyline
							className="cls-3"
							points="597.884 399.816 719.692 399.816 719.692 178.816 840 178.816"
						/>
						<polyline
							className="cls-3 change-wire"
							points="359.827 166.484 359.827 259.126 597.827 259.126 597.827 399.814"
						/>
						<polyline
							className="cls-3 change-wire"
							points="307.917 445.277 307.917 552.012 695.711 552.012 695.711 502.989 875.711 502.989"
						/>
						<polyline
							className="cls-3"
							points="875.711 503.348 875.711 336.941 840 336.941 840 178.816"
						/>
						<path className="cls-4" d="M49.8211,349.4844" />
						<polyline
							class="cls-3 new"
							points="359.827 167.484 359.827 329.126 309.827 329.126 309.827 446.814"
						/>
						<polyline
							class="cls-3 new"
							points="307.917 445.277 425.827 444.767 425.827 514.767 595.827 514.767 595.827 404.767"
						/>
					</g>
				</svg>

				<div className="circle circle-css pulse">
					<span>CSS</span>
				</div>
				<div className="circle circle-three-js pulse">
					<span>THREE.JS</span>
				</div>
				<div className="circle circle-canvas pulse">
					<span>&lt;CANVAS&gt;</span>
				</div>
				<div className="circle circle-video pulse">
					<span>&lt;VIDEO&gt;</span>
				</div>
				<img className="tv pulse" src={tv} />
				<div className="tv-bg" />
				<img className="tri" src={tri} />
				<div className="tv-circle" />
				<div className="scanlines" />
				<img className="tv pulse" src={tvFrame} />
			</div>
		)
	}
}
