import {
	html,
	css,
	LitElement,
	classMap,
	ref,
	keyed,
	styleMap,
	unsafeHTML,
	nothing
// } from "https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js"
} from "./lit.js"

class VLitElement extends LitElement {
	static props = {} // reactive property: default value
	static properties = {} // reactive property: options
	// static shadow = false
	createRenderRoot() {
		// if (!this.constructor.shadow) return this // disable shadow root
		// return super.createRenderRoot()
		return this // disable shadow root
	}

	// not implemented
	// static shadow = true // needed for static styles property
	// static styles = css`
	// button{
		// background: red}`


	constructor() {
		super()
		for (let prop in this.constructor.props)
			this[prop] = this.constructor.props[prop]
		// assign every default value of property in the props to the instance
	}
	static set tag(tagName) {
		// console.log(this.meta) // the url of the class which was imported
		for (const prop in this.props) this.properties[prop] ??= {} // add reactiveness for the property
		customElements.define(tagName, this) // assign custom element to a tag
	}
}

export { html, css, LitElement, VLitElement, classMap, keyed, styleMap, unsafeHTML, nothing }
