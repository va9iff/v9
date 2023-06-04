import { html, VLitElement } from "../../vlit.js"
import {View} from "../view.js"

// await new Promise(r=>setTimeout(r,1500))

import socials from "../../../content/en/panes/social-networks.js"
let platforms = Object.keys(socials.table).map(identifier=>({
	identifier,
	...socials.table[identifier]
}))

class VNetwork extends View {
	static properties = {
	}
	render() {
		// maybe:
		// content { padding: 42px }
		// [indent] {margin-left: attr(indent)}
		// or maybe even *[i] {margin-left: calc(attr(i) * 40px)}
		/*
			[i=1] is same as [indent]

			content
				h1[i=i]
				div[i=1]
					table


		*/
		// 
		return html`
			<div class="content">
				<div i>
					<h1>Social Media and Network</h1>
					<div i>
						<h4 fadeInOpacity>Placces where you can reach me</h4>
						<div stretched>
						<div role="gird" class="table socials">
							${platforms.map((platform, i)=>html`
							<a href=${platform.link} target="blank" role="row" class="row" style="--i: ${i+1}">
								<div role="gridcell" class="cell icon"><img src="./src/views/network/icons/${platform.identifier}.png" alt=""></div>
								<div role="gridcell" class="cell platform">${platform.name}</div>
								<div role="gridcell" class="cell username">${platform.userName}</div>
								<div role="gridcell" class="cell note">${platform.note}</div>
							</a>
						`)}
						</div>
						</div>
					</div>
				</div>
			</div>
		`
	}
}

VNetwork.tag = "v-network"
