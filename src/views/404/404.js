import { html, VLitElement } from "/src/vlit.js"
import {View} from "../view.js"

await new Promise(r=>setTimeout(r,500))

class V404 extends View {
	static properties = {
	}
	render() {
		return html`
			<h1>Erro 404</h1>
		`
	}
}

V404.tag = "v-404"
