import { html, VLitElement, styleMap } from "/src/vlit.js"

class VButton extends VLitElement {
	static properties = {
		x: {},
		y: {},
		active: {reflect: true, type: Boolean}
	}
	constructor() {
		super()
		this.active = false
		this.x = 30
		this.y = 30
		this.text ??= this.getAttribute("text")
		this.addEventListener("mousemove", this.hoverPositionFix)
	}
	hoverPositionFix = e => {
		this.x = e.offsetX
		this.y = e.offsetY
	}
	handler(e) {
		this.active = !this.active
		console.log("clicked", this)
	}
	render() {
		return html`
			<button @click=${this.handler}>${this.text || this.button()}</button>
			<div
				class="circle"
				style=${styleMap({
					left: this.x + "px",
					top: this.y + "px",
				})}
			></div>
		`
	}
}

VButton.tag = "v-button"
