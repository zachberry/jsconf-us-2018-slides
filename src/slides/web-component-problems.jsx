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
			'problem-1',
			'solution-1',
			'problem-2',
			'solution-2',
			'problem-3',
			'solution-3',
			'problem-4',
			'solution-4',
			'problem-5',
			'solution-5',
			'solution-5b',
			'overview'
		]
	}

	render() {
		return (
			<div className="scroller">
				<h1>Problems</h1>
				<ul>
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
						<div>
							<code>getAttribute</code> always returns strings since attributes are strings.
						</div>
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
					<li className="hide item-4">
						<div>
							Can't catch errors from <code>attributeChangedCallback</code>.
						</div>
						<div className="hide solution-4">
							<span>
								Solution: Make your own <code>attributeChangedCallback</code>!
							</span>
							<Code
								lang="javascript"
								text={`//...
attributeChangedCallback(attrName, oldValue, newValue) {
	try {
		this.onAttrChanged(attrName, oldValue, newValue);
	} catch (e) {
		Events.emit("app:error", e.message);
	}
}
// ...`}
							/>
						</div>
					</li>
					<li className="hide item-5">
						<div>Performance</div>
						<div className="hide solution-5">
							<span className="shrug">Get a faster computer</span>{' '}
							<span className="actually">
								Use React's <code>shouldComponentUpdate</code>
							</span>
						</div>
					</li>
				</ul>
			</div>
		)
	}
}
