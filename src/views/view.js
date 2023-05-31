import { html, VLitElement } from "../vlit.js"

export class View extends VLitElement {
	render() {
		return html` view's render method isn't defined `
	}
	updated() {
		super.updated()

		// this.classList.remove("open")
		// making sure to call after the element has rendered :D
		window.requestAnimationFrame(
			() => setTimeout(() => this.classList.add("open")),
			1
		)
	}
}
