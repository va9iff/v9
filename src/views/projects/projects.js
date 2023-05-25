import { html, VLitElement } from "/src/vlit.js"
import {View} from "../view.js"

await new Promise(r=>setTimeout(r,500))

class VProjects extends View {
	static properties = {
	}

	render() {
		return html`
			<div opacome class="content">
			work in progress.. <br>
			there will be my projects
			</div>
		`
	}
}

VProjects.tag = "v-projects"
