import { html, VLitElement } from "/src/vlit.js"
import {View} from "../view.js"

await new Promise(r=>setTimeout(r,500))

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
				<h1 indented>Social Media and Network</h1>
				<div indented>
					<h4 indented>Placces where you can reach me</h4>
						<table indented class="socials">
							<tr>
								<td class="icon">f</td>
								<td class="platform">Facebook</td>
								<td class="username">@va9iff</td>
								<td class="note">My elders forced me to</td>
							</tr>
						</table>
				</div>
			</div>
		`
	}
}

VNetwork.tag = "v-network"
