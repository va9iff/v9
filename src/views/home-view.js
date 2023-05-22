import { html, VLitElement } from "/src/vlit.js"
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
		home view home view home view home view home view 

		<div class="content">
			<br>
			<br>
			<br>
			<br>
			do we need this content div?
		</div>

		`
	}
}

VHome.tag = "v-home"
