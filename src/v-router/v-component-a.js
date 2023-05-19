import { html, VLitElement } from "/src/vlit.js"

await new Promise(r=>setTimeout(r,1000))

console.log('VComponentB has been loaded')

class VComponentA extends VLitElement {
	render(){
		return html`
			that's component a from a different module
		`
	}
	updated(){
		super.updated()

		this.classList.remove("open")
		console.log(this.classList)
		console.log('yes updated')
		window.requestAnimationFrame(()=>this.classList.add("open"),1)

	}
}

VComponentA.tag = "v-component-a"