import { html, VLitElement } from "../../vlit.js"

await new Promise(r=>setTimeout(r,1000))

console.log('VComponentB has been loaded')

class VComponentB extends VLitElement {
	render(){
		return html`
			that's ANOTHER component called b from a COMPLETELY different module
		`
	}
}

VComponentB.tag = "v-component-b"