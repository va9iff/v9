import { html, keyed, VLitElement } from "/src/vlit.js"

import { VNotification } from "./v-notification.js"

const counter = ((count=0) => ()=>count++)()
let notifications = document.querySelector(".v-notifications")
window.notfis = [
			// {
				// uid: counter(),
				// content: html`hi <button @click=${e=>notfi.k++}>${notfi.k}</button>`,
			// },
		]

window.notify = notfi => {
	notfi.uid = counter()
	notfis.push(notfi)
	let notification = document.createElement(notfi.element ?? "v-notification")
	notification.addEventListener('mousemove', e=> {
					const rect = notification.getBoundingClientRect();
					const x = e.clientX - rect.left;
					const y = e.clientY - rect.top;

					notification.x = x
					notification.y = y
					notification.rota = x/rect.width*150+15
					console.log(notification.rota)
			})
	notification.content = notfi.content
	notification.uid = notfi.uid
	window.notfis.push(notfi)
	notifications.appendChild(notification)

}


window.notify({
	content: "hi"
})

window.notify({
	content: "widsja ksjlask kwjl"
})
window.notify({
	content: "widsja ksjlask kwjl"
})
window.notify({
	content: "widsja ksjlask kwjl"
})
window.notify({
	content: "widsja ksjlask kwjl"
})
window.notify({
	content: "widsja ksjlask kwjl"
})
window.notify({
	content: "widsja ksjlask kwjl"
})
