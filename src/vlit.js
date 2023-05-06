import {
	html,
	css,
	LitElement,
	classMap,
	ref,
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js"

class VLitElement extends LitElement {
	static props = {} // reactive property: default value
	static properties = {} // reactive property: options
	createRenderRoot() {
		return this // disable shadow root
	}
	constructor() {
		super()
		for (let prop in this.constructor.props)
			this[prop] = this.constructor.props[prop]
		// assign every default value of property in the props to the instance
	}
	static set tag(tagName) {
		for (const prop in this.props) this.properties[prop] ??= {} // add reactiveness for the property
		customElements.define(tagName, this) // assign custom element to a tag
	}
}

export { html, css, LitElement, VLitElement, classMap }
