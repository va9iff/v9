import { html, VLitElement } from "/src/vlit.js"
import {View} from "../view.js"

await new Promise(r=>setTimeout(r,500))

class VProjects extends View {
	static properties = {
	}

	render() {
		return html`
			Projeeeeeectsss
			ts
			ts
			ts
			ts
			ts
		`
	}
}

VProjects.tag = "v-projects"
