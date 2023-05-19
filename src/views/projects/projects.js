import { html, VLitElement } from "/src/vlit.js"
import {View} from "../view.js"

await new Promise(r=>setTimeout(r,1000))

class ProjectsView extends View {
	static properties = {
		v9: { reflect: true },
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

ProjectsView.tag = "projects-view"
