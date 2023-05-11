import { html, VLitElement } from "/src/vlit.js"

let notifications = []

class VNotification extends VLitElement {
	static props = {
		num: 5,
		k: 0
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
	close(){
		// notifications.filter(notification=>notification.uid!=this.uid)
	}
	render(){
		return html`
			<div class="content">
			<button class="close" @click=${this.close}>X</button>
				${this.content(this)}
			</div>
		`
	}
}

VNotification.tag = "v-notification"