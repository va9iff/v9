import { html, VLitElement } from "../vlit.js"

class VMe extends VLitElement {
	static props = {
		num: 5
	}
	render(){
		return html`hi ${this.num} <button @click = ${e=>this.num++}>+</button>`
	}
}

VMe.tag = "v-me"