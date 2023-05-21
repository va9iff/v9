import { html, VLitElement } from "/src/vlit.js"
import {View} from "../view.js"

await new Promise(r=>setTimeout(r,500))

class VNetwork extends View {
	static properties = {
	}
	render() {
		return html`
			${Math.random()}
			this is from network component
		`
	}
}

VNetwork.tag = "v-network"
