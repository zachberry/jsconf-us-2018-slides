import './slides.css'

import React, { Component, Fragment } from 'react'

import Code from '../components/code'

export default class SlideContent extends Component {
	static get name() {
		return 'break-stuff'
	}

	static get steps() {
		return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
	}

	render() {
		return (
			<Fragment>
				<Code
					steps={[
						null,
						[1],
						[2, 3, 4],
						[6],
						[7],
						[8, 9, 10, 11],
						[13],
						[14],
						[15, 16, 17],
						[18],
						null
					]}
					step={this.props.step}
					lang="javascript"
					text={`document.body.innerHTML =
					"<marquee scrollamount='200' direction='down'>" +
						document.body.innerHTML +
					"</marquee>";

[...document.querySelectorAll('span,a,h1,h2,h3,h4,h5,h6')]
	.forEach(e =>
		(e.outerHTML =
			"<marquee scrollamount='50' behavior='alternate'>" +
				e.innerHTML +
			'</marquee>'));

angle = 0
setInterval(() => {
	angle += 0.1;
	[...document.querySelectorAll('div')].forEach(e => (
		e.style.transform = 'rotate(' + angle + 'deg)')
)}, 1);`}
				/>
				<a className="demo" target="_blank" href="https://2018.jsconf.us/">
					Demo
				</a>
			</Fragment>
		)
	}
}
