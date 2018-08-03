import './slides.css'

import React, { Component, Fragment } from 'react'
import lzx from './lzx.jpg'

export default class SlideContent extends Component {
	static get name() {
		return 'lzx'
	}

	// static get steps() {
	// 	return ['start', 'h1', 'h2']
	// }

	render() {
		return (
			<Fragment>
				<figure>
					<img src={lzx} />
					<figcaption>
						<a href="https://www.flickr.com/photos/k9d/16572051832/in/photolist-rfq6DA-9xjdFk-hxyeHZ-m7nb1t-9xiKiP-3b1MS-ansMyS-9xmFEy-9xiLdM-9xnqvN-9xmBY9-kDx3Qi-9xjhpc-9xmLom-9xjbMD-9xnuGf-9xiUPp-9xiVvR-9xjuNe-9xjmtz-9xiN1g-Hps3jb-HLQ133-HLR3a7-HHyGMV-CKkgHi-HPSTdB-4PfkCS-9xjxg6-9xjb1Z-9xg9Lf-9xghc5-9xnnpS-4JBNjA-9xgnzb-9xmGvb-9xiTxv-9xjcQK-9xjkcK-9xjufM-9xg9eq-pQYH5R-9xjnjx-9xdqPD-9xmR8J-9xjmTD-HLQwcm-4PfjSC-GUdpMM-dxUYR5">
							Photo
						</a>{' '}
						by <a href="https://www.flickr.com/photos/k9d/">j bizzie</a>
					</figcaption>
				</figure>
			</Fragment>
		)
	}
}
