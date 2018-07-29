import './footer.css'

import React, { Component } from 'react'

const SLIDE_TRANSITION_MS = 500

class Footer extends Component {
	render() {
		return (
			<footer>
				{/* <a href="https://github.com/zachberry" className="me">
					github.com/zachberry
				</a> */}
				<div className="jsconf">JSConf US 2018 ● Creating a Video Synth with JS</div>
			</footer>
		)
	}
}

export default Footer
