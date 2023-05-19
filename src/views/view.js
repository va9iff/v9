import { html, VLitElement } from "/src/vlit.js"

export class View extends VLitElement {
	render(){
		return html`
			view's render method isn't defined
		`
	}
	updated(){
		super.updated()

		// this.classList.remove("open")
		console.log(this.classList)
		console.log('yes updated')
		window.requestAnimationFrame(()=>this.classList.add("open"),1)

	}
}

