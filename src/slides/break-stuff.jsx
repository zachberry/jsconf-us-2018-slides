import './slides.css'

import React, { Component, Fragment } from 'react'

export default class SlideContent extends Component {
	static get name() {
		return 'break-stuff'

		//https://2018.jsconf.us/
	}

	render() {
		return (
			<Fragment>
				<textarea
				>{`document.body.innerHTML = '<marquee scrollamount="20">' + document.body.innerHTML + '</marquee>'
window.__i = 0
setInterval(() => {
	window.__i = window.__i + 0.1
	Array.prototype.map.call(document.querySelectorAll('*'), e => {
		e.style.transform = "rotate(" + window.__i + "deg)"
	})
}, 1)`}</textarea>
			</Fragment>
		)
	}
}
