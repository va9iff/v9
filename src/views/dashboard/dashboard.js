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
				<div class="name">
					<h1 class="english">
						Vagif Valiyev
					</h1>
					<h1 class="native">
						Vaqif Vəliyev
					</h1>
					<div class="line"></div>
				</div>
			</div>
		`
	}
}

VDashboard.tag = "v-dashboard"
