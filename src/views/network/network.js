import { html, VLitElement } from "/src/vlit.js"
import {View} from "../view.js"

await new Promise(r=>setTimeout(r,500))

class VNetwork extends View {
	static properties = {
		v9: { reflect: true },
	}
	constructor(){
		super()
		setTimeout(()=>this.setAttribute("v",parseInt(Math.random()*10)))
	}
	render() {
		return html`
			${Math.random()}
			this is from network component
		`
	}
}

VNetwork.tag = "v-network"
