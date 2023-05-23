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

/*
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
					transform: `rotate(${this.rota}deg)`,
					// transition: "400ms cubic-bezier(0, 1.16, 0.16, 1.13)",
					transition: "none",
					transformOrigin: "left",
			})}></div>

*/

window.notify = notfi => {
	notfi.uid = counter()
	notfis.push(notfi)
	let notification = document.createElement(notfi.element ?? "v-notification")
/*	notification.addEventListener('mousemove', e=> {
					const rect = notification.getBoundingClientRect();
					const x = e.clientX - rect.left;
					const y = e.clientY - rect.top;

					notification.x = x
					notification.y = y
					notification.rota = x/rect.width*150+15
					console.log(notification.rota)
			})
*/	notification.content = notfi.content
	notification.uid = notfi.uid
	window.notfis.push(notfi)
	notifications.appendChild(notification)
	if (Math.random() > 0.5) notification.classList.add("important")
	return notification
}


// window.notify({
// 	content: "hi"
// })

// window.notify({
// 	content: "widsja ksjlask kwjl"
// })
// window.notify({
// 	content: "widsja ksjlask kwjl"
// })
// window.notify({
// 	content: "widsja ksjlask kwjl"
// })
// window.notify({
// 	content: "widsja ksjlask kwjl"
// })
// window.notify({
// 	content: "widsja ksjlask kwjl"
// })
// window.notify({
// 	content: "widsja ksjlask kwjl"
// })


setInterval(()=>{
	let notification = window.notify({
		content: Math.random()
	})
	// setTimeout(()=>notification.close(),2400)
},2000)

