import { html, VLitElement } from "/src/vlit.js"



const content = document.querySelector("#content")
// let loadingFor // to check if the location has changed before the element has appended
const route = (e) => {
	e = e || window.event;
	e.preventDefault();
	window.history.pushState({}, "", e.target.href);
	// loadingFor = window.location.hash

	handleLocation();
}
window.route = route

const titles = {
	"": ()=> "V9",
	404: ()=> "V9 oops....",
	"#dashboard": ()=> "Dashboard - V9",
	"#network": ()=> "Network - V9",
	"#projects": ()=> "Projects - V9",

	// "#network": ()=> "Network" + window.styledTitleV9, // one part being 
	// consistent for a time but the other half (Network) gets changed.
}

const handleLocation = async () => {
	const path = window.location.pathname;
	const hash = window.location.hash
	let title = titles[hash]?.() || titles[404]()
	window.changeTitle(title)
	// console.log(path)
	// console.log(hash)
	for (let child of content.children) {
		// for classList.add("open") see View class @view.js
		child.classList.add("close")
		setTimeout(()=>{
			console.log(child)
			child.remove()
		}, 1000)
	}
	content.classList.add("loading") // commented for now
	console.log('loading', hash)
	let routeFun = routes[hash] || routes[404]
	let routeElement = await routeFun()
	// console.log(loadingFor, hash, loadingFor == hash, routeElement)
	if (window.location.hash == hash) content.appendChild(routeElement)
	content.classList.remove("loading") // commented for now


}


const routes = {
	// not found view (/#some path that doesnt exist)
	404: async ()=> {
		await import("../views/404/404.js")
		let el = document.createElement("v-404")
		return el
	},
	// home view (active sidebar button deactivated)
	"": async ()=> {
		await import("../views/home-view.js")
		let el = document.createElement("v-home")
		return el
	},
	// unnecessary. /# will go to / which is "" (just above)
	"#": async ()=> {
		// probably won't be called anyway
		console.log('hash hash called?')
	},

	// MAIN ROUTES
	"#dashboard": async ()=> {
		await import("../views/dashboard/dashboard.js")
		let el = document.createElement("v-dashboard")
		return el
	},
	"#network": async () => {
		await import("../views/network/network.js")
		let el = document.createElement("v-network")
		return el
	},

	"#projects": async () => {
		await import("../views/projects/projects.js")
		let el = document.createElement("v-projects")
		return el
	},

};
// loadingFor = window.location.hash
handleLocation();
window.onhashchange = function() {
	handleLocation()
}

// window.addEventListener("popstate", (event) => {
	// handleLocation()
// });



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