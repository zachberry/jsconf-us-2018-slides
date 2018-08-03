import './slides.css'

import React, { Component, Fragment } from 'react'
import Code from '../components/code'
// import AceEditor from 'react-ace'

// import 'brace/mode/javascript'
// import 'brace/theme/monokai'

const CODE_TEXT = `function writeToIFrame(iframe, html, css) => {
	iframe.contentWindow.document.open();
	iframe.contentWindow.document.write(html);
	iframe.contentWindow.document.close();

	let style = iframe.contentWindow.document.createElement('style');
	style.innerText = css;

	iframe.contentWindow.document.head.innerHTML = '';
	iframe.contentWindow.document.head.appendChild(style);
}`

export default class SlideContent extends Component {
	static get name() {
		return 'write-to-iframe'
	}

	static get steps() {
		return [1, 2, 3, 4, 5]
	}

	render() {
		return (
			<Fragment>
				<Code
					wrapLines={true}
					lang="javascript"
					text={CODE_TEXT}
					steps={[[1, 11], [2, 3, 4], [6, 7], [9, 10]]}
					step={this.props.step}
				/>
			</Fragment>
		)
	}
}
