import { html, VLitElement } from "/src/vlit.js"
import {View} from "../view.js"

await new Promise(r=>setTimeout(r,500))

class VDashboard extends View {
	static properties = {
	}
	render() {
		return html`
			that's the dashboard
		`
	}
}

VDashboard.tag = "v-dashboard"
