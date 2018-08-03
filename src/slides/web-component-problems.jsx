import './slides.css'

import React, { Component, Fragment } from 'react'
import Code from '../components/code'
// import AceEditor from 'react-ace'

// import 'brace/mode/javascript'
// import 'brace/theme/monokai'

export default class SlideContent extends Component {
	static get name() {
		return 'web-component-problems'
	}

	static get steps() {
		return [
			'start',
			'strike',
			'problem-1',
			'solution-1',
			'problem-2',
			'solution-2',
			'problem-3',
			'solution-3'
		]
	}

	render() {
		return (
			<div className="scroller">
				<h1>
					<span className="hide ha">Problems</span>{' '}
					<span className="hide hb">💖 Opportunties for success! 🦄</span>
				</h1>
				<ol>
					<li className="hide item-1">
						<div>
							React updates trigger <code>connectedCallback</code> and{' '}
							<code>disconnectedCallback</code>
						</div>
						<div className="hide solution-1">
							Solution: Don't rely on these! Create custom callbacks to fit in React lifecycle.
						</div>
					</li>
					<li className="hide item-2">
						<div>Custom elements must be uniquely named</div>
						<div className="hide solution-2">
							<span>Solution:</span>
							<Code
								lang="html"
								text={`<n1-1532902143698 />
<n1-1532902441952 />
<!-- God, forgive me for my sins -->`}
							/>
						</div>
					</li>
					<li className="hide item-3">
						<div>`getAttribute` always returns strings since attributes are strings.</div>
						<div className="hide solution-3">
							<span>
								Solution: Make your own <code>getAttribute</code>!
							</span>
							<Code
								lang="javascript"
								text={`class BaseNode extends HTMLElement {

	getAttribute(attrName) {
		return this.nodeMapAdapter.getAttribute(this.id, attrName);
	}

	native_getAttribute(attrName) {
		return HTMLElement.prototype.getAttribute.call(this, attrName);
	}

//...`}
							/>
						</div>
					</li>
				</ol>
			</div>
		)
	}
}
