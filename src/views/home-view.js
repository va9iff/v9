import { html, VLitElement } from "../vlit.js"
import {View} from "./view.js"

class VHome extends View {
	static properties = {
		v9: { reflect: true },
	}
	constructor(){
		super()
		setTimeout(()=>this.setAttribute("v",parseInt(Math.random()*10)))
	}
	render() {
		return html`
		the background 

		<div class="content">
			<br>
			<br>
			<br>
			<br>
			element
		</div>

		`
	}
}

VHome.tag = "v-home"
