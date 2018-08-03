import './slides.css'

import React, { Component, Fragment } from 'react'

export default class SlideContent extends Component {
	static get name() {
		return 'eval'
	}

	static get steps() {
		return ['crockford', 'asterix', 'me', 'me-2']
	}

	render() {
		return (
			<Fragment>
				<blockquote className="his-quote">
					<p className="quote">
						"<code>eval()</code> Is Evil"<span className="asterix">&nbsp;*</span>
					</p>
					<p className="addendum">* Except when it's used in a weird art project</p>

					<footer>
						<div className="crockford">- Douglas Crockford, "Javascript: The Good Parts"</div>
					</footer>
				</blockquote>
				<blockquote className="my-quote">
					<p>
						"<code>eval()</code> Is Totally Punk Rock"
					</p>
					<footer>
						<div className="me">- Me, right now, in this talk</div>
					</footer>
				</blockquote>
			</Fragment>
		)
	}
}
