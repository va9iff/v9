import { html, VLitElement, styleMap } from "/src/vlit.js"

export class VNotification extends VLitElement {
	static properties = {
		content: {},
		uid: {},
		x: {},
		y: {},
		rota: {}
	}
	constructor(){
		super()
		this.x=0
		this.y=0
		this.rota = 0
	}
	static props = {
		content: "notification"
	}
	// notfi == this
	content(notfi){
		return html`
		<h2>Sup!</h2>
		`
	}
	click(e){
		alert("wussup")
		// ...class = "content" @click=${this.click}...
	}
	removeNotfi(){
		this.remove()
		console.log('fasad')
	}
	close(){
		this.classList.add("closing")
		window.notfis = window.notfis.filter(notfi=> notfi.uid!=this.uid)
		setTimeout(()=>this.removeNotfi(), 2000)
		
		// console.log(this.parent.notifications)
	}
	render(){
		console.log(this.x,this.y)
		return html`
			<div class="content">
			<button class="close" @click=${this.close}>X</button>
				${this.content} ${this.uid} ${this.x} ${this.y}
			</div>
		`
	}
}

VNotification.tag = "v-notification"