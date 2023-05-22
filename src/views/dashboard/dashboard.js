import { html, VLitElement } from "/src/vlit.js"
import {View} from "../view.js"

await new Promise(r=>setTimeout(r,500))

class VDashboard extends View {
	static properties = {
	}
	render() {
		return html`
			<div class="content">
				that's the dashboard
			</div>
		`
	}
}

VDashboard.tag = "v-dashboard"
