import './slides.css'

import React, { Component, Fragment } from 'react'

export default class SlideContent extends Component {
	static get name() {
		return 'idea'
	}

	static get steps() {
		return ['start', 'break-1', 'break-2', 'break-3']
	}

	componentDidMount() {
		// let i = 0
		// setInterval(() => {
		// 	i = i + 0.1
		// 	Array.prototype.map.call(document.querySelectorAll('h1'), e => {
		// 		e.style.transform = `rotate(${i}deg)`
		// 	})
		// }, 1)
		// Array.prototype.map.call(document.querySelectorAll('*'), e => {
		// 	if (!e.parentElement) return
		// 	e.outerHTML = '<marquee scrollamount="20">' + e.innerHTML + '</marquee>'
		// })
	}

	componentDidUpdate() {
		switch (this.props.step) {
			case 'break':
				document.body.style.transform = 'rotate(20deg)'
				break

			default:
				document.body.style.transform = ''
		}
	}

	render() {
		return (
			<Fragment>
				<h1>The Idea</h1>
			</Fragment>
		)
	}
}
