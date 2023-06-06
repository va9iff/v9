import { html, VLitElement, styleMap } from "../../vlit.js"

class VButton extends VLitElement {
	static properties = {
		x: {},
		y: {},
		active: {reflect: true, type: Boolean},
		text: {}
	}
	constructor() {
		super()
		this.active = false
		this.x = Math.random() * 100 + "%"
		this.y = Math.random() * 100 + "%"
		// this.text ??= this.getAttribute("text")
		this.addEventListener("mousemove", this.hoverPositionFix)
	}
	hoverPositionFix = e => {
		this.x = e.offsetX + "px"
		this.y = e.offsetY + "px"
	}
	// button(){
		// return html`<div>default v-button elements</div>`
	// }
	render() {
		return html`
			<button @click=${this.handler}>${this.text || this.getAttribute("text")}</button>
			<div
				class="circle"
				style=${styleMap({
					left: this.x,
					top: this.y,
				})}
			></div>
		`
	}
}

VButton.tag = "v-button"
