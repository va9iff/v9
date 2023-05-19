import { html, VLitElement } from "/src/vlit.js"



const content = document.querySelector("#content")
console.log(content)
let loadingFor // to check if the location has changed before the element has appended
const route = (e) => {
	e = e || window.event;
	e.preventDefault();
	window.history.pushState({}, "", e.target.href);
	loadingFor = window.location.hash

	handleLocation();
}
window.route = route

const handleLocation = async () => {
	const path = window.location.pathname;
	const hash = window.location.hash

	// console.log(path)
	// console.log(hash)

	for (let child of content.children) {
		child.classList.remove("open")
		setTimeout(()=>{
			console.log(child)
			child.remove()
		}, 1000)
	}
	content.classList.add("loading") // commented for now
	let routeElement = await routes[hash]()
	console.log(loadingFor, hash, loadingFor == hash, routeElement)
	if (loadingFor == hash) content.appendChild(routeElement)
	content.classList.remove("loading") // commented for now

}


const routes = {
	// "/about": "/pages/about.html",
	// 404: "/pages/404.html",
	// I'll use functions:
	"#v-compact": async ()=>{
		console.log('get')
		await import('./v-component-a.js')
		return document.createElement('v-component-a')

	},
	"#projects": async ()=>{
		console.log('get')
		await import('./v-component-b.js')
		// new Promise(r=>setTimeout(r,1000))
		return document.createElement('v-component-b')

	},
	"#nu": async () => document.createElement('div'),
	404: ()=> document.createElement('div'),
	"": ()=> document.createElement('div'),

	// MAIN ROUTES
	"#dashboard": ()=>{
		let el = document.createElement("div")
		el.innerHTML = "still in progress"
		return el
	},
	"#network": async ()=>{
		await import("../views/network/network.js")
		let el = document.createElement("v-network")
		return el
	},

	"#projects": ()=>{
		let el = document.createElement("div")
		el.innerHTML = "projo"
		return el
	},

};
loadingFor = window.location.hash
handleLocation();
window.onhashchange = function() {
	handleLocation()
}



// class VA extends VLitElement{
// 	static properties = {
// 		href: {
// 			attribute: true,
// 			reflect: true
// 		},
// 		text: {
// 			attribute: true,
// 			reflect: true
// 		}
// 	}
// 	constructor(){
// 		super()
// 	}
// 	connectedCallback(){
// 		super.connectedCallback()

// 	}
// 	route(e){
// 		e.preventDefault()
// 		// window.history.pushState({}, "", e.target.href);
// 		handleLocation()
// 	}
// 	render(){
// 		return html`
// 			<a @click = ${this.route} href=${this.href}>${this.text}</a>
// 		`
// 	}
// }
// VA.tag = "v-a"

// class VRouter extends VLitElement {
// 	static props = {
// 		num: 5
// 	}
// 	async render(){
// 		await new Promise(r=>setTimeout(r,1000))

// 		return html``
// 	}
// }

// VRouter.tag = "v-router"