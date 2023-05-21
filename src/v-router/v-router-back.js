/*

	THIS VERSION HAS A UNIQUE FUNCTIONALITY:

	when you previously go #A -> # -> #A
	(position refers to switching properties with transition)
	- A is created at starting position and fade in to its stable position
	- A go to its closing position
	- new A is created in its starting 
	- this A goes to its stable position

	but with this version
	- A is created at starting position and fade in to its stable position
	- A go to its closing position
	- the same A was hold from going to its closing position and had been broughy
		back to its stable position (giving a different "fade in" animation)

	but I want to have a loader so I may throw this idea. or idk we can keep.
	or have a loader if we go #A -> #B. also one setTimeout may be not enough 
	for this logic. it can behave instantaneous right now when you do.
	but hey if I'll use it, I'll use it only for #A -> # -> #A and have a loader
	for #A -> #B already.

	but idk man it may make the current page not so serious or like a tab.
	I want it to have a weight.
*/


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

let lastElement = null
let lastRoute = null
let createNew = true
const handleLocation = async () => {
	const hash = window.location.hash

	for (let child of content.children) {
		child.classList.add("close")
		setTimeout(()=>{
			if (child == lastElement) return
			child.remove()
		}, 1000)
	}

	createNew = true
	if (hash == lastRoute) {
		if (lastElement) {
			createNew = false
			lastElement.classList.remove("close")
		}
	}

	content.classList.add("loading")
	let routeElement = await routes[hash]()
	if (loadingFor == hash) {
		if (createNew) {
			content.appendChild(routeElement)
			if (hash){
				lastElement = routeElement
				lastRoute = hash
			}
		}
	}
	content.classList.remove("loading")

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
	"": ()=> {
		let el = document.createElement('div')
		el.innerHTML = "that's the default home view"
		return el
	},
	// unnecessary. /# will go to / which is "" (just above)
	"#": ()=> {
		console.log('hash hash called?')
	},

	// MAIN ROUTES
	"#dashboard": ()=> {
		let el = document.createElement("div")
		el.innerHTML = "still in progress"
		return el
	},
	"#network": async () => {
		await import("../views/network/network.js")
		let el = document.createElement("v-network")
		return el
	},

	"#projects": async () => {
		await import("../views/projects/projects.js")
		let el = document.createElement("projects-view")
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