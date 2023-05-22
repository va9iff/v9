import { html, VLitElement } from "/src/vlit.js"
import {View} from "../view.js"

await new Promise(r=>setTimeout(r,500))

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
					<h4>Placces where you can reach me</h4>
						<table class="socials">
						${platforms.map(platform=>html`
							<tr>
								<td class="icon"><img src="./src/views/network/icons/${platform.identifier}.png" alt=""></td>
								<td class="platform">${platform.name}</td>
								<td class="username">${platform.userName}</td>
								<td class="note">${platform.note}</td>
							</tr>
							`)}
							<tr>
								<td class="icon"><img src="./src/views/network/icons/facebook.png" alt=""></td>
								<td class="platform">Facebook</td>
								<td class="username">@va9iff</td>
								<td class="note">My elders forced me to</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		`
	}
}

VNetwork.tag = "v-network"
