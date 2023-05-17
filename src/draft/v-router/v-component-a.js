import { html, VLitElement } from "../../vlit.js"

await new Promise(r=>setTimeout(r,1000))

console.log('VComponentB has been loaded')

class VComponentA extends VLitElement {
	render(){
		return html`
			that's component a from a different module
		`
	}
}

VComponentA.tag = "v-component-a"