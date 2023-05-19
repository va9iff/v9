import { html, VLitElement } from "/src/vlit.js"
import {View} from "../view.js"

await new Promise(r=>setTimeout(r,3000))

class VNetwork extends View {
	static properties = {
		v9: { reflect: true },
	}

	render() {
		return html`
			this is from network component
		`
	}
}

VNetwork.tag = "v-network"
