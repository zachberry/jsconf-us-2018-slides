import './code.css'

import React, { Component } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { hopscotch } from 'react-syntax-highlighter/styles/hljs'

// text = ''
// steps = [[], [0,9], [1,2,3], [5,6,7,8]]
// step = 0

class Code extends Component {
	constructor(props) {
		super(props)

		this.codeTexts = []

		let steps = props.steps || ['*']
		let lines = props.text.split('\n')
		let empty = new Array(lines.length).fill(' ')
		for (let i = 0, len = steps.length; i < len; i++) {
			let step = steps[i]
			if (step === '*') {
				this.codeTexts.push(props.text)
			} else {
				let text = empty.slice(0)
				for (let j = 0, len2 = step.length; j < len2; j++) {
					text[step[j]] = lines[step[j]]
				}
				this.codeTexts.push(text.join('\n'))
			}
		}
	}

	render() {
		return (
			<div className={'code ' + this.props.className}>
				<div key="_root" className="code-container root">
					<SyntaxHighlighter wrapLines={true} language={this.props.lang} style={hopscotch}>
						{this.props.text}
					</SyntaxHighlighter>
				</div>
				{this.codeTexts.map((t, i) => {
					return (
						<div
							key={i}
							className={
								'code-container' +
								(i + 1 === this.props.step ? ' is-current-step' : ' is-not-current-step')
							}
						>
							<SyntaxHighlighter wrapLines={true} language={this.props.lang} style={hopscotch}>
								{t}
							</SyntaxHighlighter>
						</div>
					)
				})}
			</div>
		)
	}
}

export default Code
