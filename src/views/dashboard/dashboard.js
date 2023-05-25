import { html, VLitElement } from "/src/vlit.js"
import {View} from "../view.js"

await new Promise(r=>setTimeout(r,500))

class VDashboard extends View {
	static properties = {
	}
	render() {
		return html`
			<div class="content">
			<img src="./img/me.jpg" class="me" alt="">
				that's the dashboard
				that's the dashboard
				that's the dashboard
				that's the dashboard
				that's the dashboard
				that's the dashboard
				that's the dashboard
				that's the dashboard
				that's the dashboard
				that's the dashboard
				that's the dashboard
				that's the dashboard
			</div>
		`
	}
}

VDashboard.tag = "v-dashboard"
