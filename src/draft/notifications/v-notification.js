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
				<div style=${styleMap({
					width: "500px", 
					height:"20px", 
					borderRadius: "50px",
					left: this.x+"px", 
					top: this.y-10+"px", 
					position: "absolute", 
					background: "gray",
					pointerEvents: "none",
					backdropFilter: "hue-rotate(80deg)", 
					boxShadow: "0 0 20px 30px #ff00",
					transform: `rotate(${/*this.y*/ this.rota}deg)`,
					// transition: "400ms cubic-bezier(0, 1.16, 0.16, 1.13)",
					transition: "none",
					transformOrigin: "left",
			})}></div>
			<button class="close" @click=${this.close}>X</button>
				${this.content} ${this.uid} ${this.x} ${this.y}
			</div>
		`
	}
}

VNotification.tag = "v-notification"