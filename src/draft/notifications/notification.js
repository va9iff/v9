import { html, VLitElement } from "/src/vlit.js"

class VNotification extends VLitElement {
	static props = {
		num: 5
	}
	content(){
		return html`
		<h2>Sup!</h2>
		`
	}
	click(e){
		alert("wussup")
	}
	close(){
		// notifications.filter(notification=>notification.uid!=this.uid)
	}
	render(){
		return html`
			<div class="content" @click=${this.click}>
			<button class="close" @click=${this.close}>X</button>
				${this.content()}
			</div>
		`
	}
}

VNotification.tag = "v-notification"