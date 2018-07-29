import './slides.css'

import React, { Component, Fragment } from 'react'

export default class SlideContent extends Component {
	static get name() {
		return 'midi-3'
	}

	static get steps() {
		return [1, 2, 3, 4]
	}

	render() {
		return (
			<Fragment>
				<h1>Note On Message</h1>
				<table>
					<thead>
						<tr className="head-1">
							<th colSpan="2">Status Byte</th>
							<th colSpan="2">Data Byte</th>
							<th colSpan="2">Data Byte</th>
						</tr>
						<tr className="head-2">
							<th>Message</th>
							<th>Channel</th>
							<th colSpan="2">Note Number</th>
							<th colSpan="2">Velocity</th>
						</tr>
					</thead>
					<tbody>
						<tr className="english">
							<td>Note On</td>
							<td>#1</td>
							<td colSpan="2">Middle C = Note 60</td>
							<td colSpan="2">100%</td>
						</tr>
						<tr className="binary">
							<td>1001</td>
							<td>0000</td>
							<td colSpan="2">00111100</td>
							<td colSpan="2">01111111</td>
						</tr>
					</tbody>
				</table>
			</Fragment>
		)
	}
}
