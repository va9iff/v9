import { html, VLitElement } from "/src/vlit.js"

import "./v-notification.js"

class VNotifications extends VLitElement {
	static props = {
		notifications: [
			notfi => html`hi <button @click=${e=>notfi.k++}>${notfi.k}</button>`,
			notfi => html`hi <button @click=${e=>notfi.k++}>${notfi.k}</button>`,
			notfi => html`bye`,
			notfi => html`anoda`,
			notfi => html`fistan<br />fisifistan`,
		],
	}
	render() {
		return this.notifications.map(
			content => html`<v-notification .content=${content}></v-notification>`
		)
	}
}

VNotifications.tag = "v-notifications"
