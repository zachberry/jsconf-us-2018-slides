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
	}

	render() {
		return (
			<div className={'code ' + this.props.className}>
				<SyntaxHighlighter
					wrapLines={true}
					language={this.props.lang}
					style={hopscotch}
					lineProps={num => {
						if (!this.props.steps) return

						let thisStep = this.props.steps[this.props.step - 1]
						if (!thisStep) return

						let isLineActive = thisStep.indexOf(num) > -1

						return {
							style: { opacity: isLineActive ? 1 : 0.3 }
						}
					}}
				>
					{this.props.text}
				</SyntaxHighlighter>
			</div>
		)
	}
}

export default Code
