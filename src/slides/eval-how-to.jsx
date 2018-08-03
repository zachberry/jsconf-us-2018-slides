import './slides.css'

import React, { Component, Fragment } from 'react'

import Code from '../components/code'

export default class SlideContent extends Component {
	static get name() {
		return 'eval-how-to'
	}

	static get steps() {
		return ['start', 'eval', 'function']
	}

	render() {
		return (
			<Fragment>
				<h1>How to be evil:</h1>
				<ul>
					<li className="eval">
						<span>
							<code>eval</code>
						</span>
						<Code
							lang="javascript"
							text={`var x;
var a = 2;
eval("x = a + 1");
console.log(x); //3`}
						/>
					</li>
					<li className="function">
						<span>
							<code>new Function</code> (Less evil)
						</span>
						<Code
							lang="javascript"
							text={`let add = new Function('a', 'b', "return a + b");
let x = add(1, 2);
console.log(x); //3`}
						/>
					</li>
				</ul>
			</Fragment>
		)
	}
}
