import { html, VLitElement } from "../../vlit.js"

const content = document.querySelector("#content")
console.log(content)

const route = (e) => {
	e = e || window.event;
	e.preventDefault(); // we're using #path so isn't really needed
	window.history.pushState({}, "", e.target.href);

	handleLocation();
}
window.route = route

const handleLocation = async () => {
	const path = window.location.pathname;
	const hash = window.location.hash

	console.log(path)
	console.log(hash)

	content.innerHTML = "loading"
	content.innerHTML = await routes[hash]()


}


const routes = {
	// "/about": "/pages/about.html",
	// 404: "/pages/404.html",
	// I'll use functions:
	"#about": async ()=> {
		console.log('get')
		await import('./v-component-a.js')
		new Promise(setTimeout(r=>r(),1000))
		return "that's from v-component-a"
	},
	"#v-compact": async ()=>{
		console.log('get')
		await import('./v-component-a.js')
		new Promise(r=>setTimeout(r,1000))
		return `<v-component-a></v-component-a>`

	},
	"#projects": async ()=>{
		console.log('get')
		await import('./v-component-b.js')
		new Promise(r=>setTimeout(r,1000))
		return `<v-component-b></v-component-b>`

	},
	404: ()=>"not found",
	"": ()=>"the default"
};

handleLocation();
window.onhashchange = function() {
	handleLocation()
}



class VA extends VLitElement{
	static properties = {
		href: {
			attribute: true,
			reflect: true
		},
		text: {
			attribute: true,
			reflect: true
		}
	}
	constructor(){
		super()
	}
	connectedCallback(){
		super.connectedCallback()

	}
	route(e){
		e.preventDefault()
		// window.history.pushState({}, "", e.target.href);
		handleLocation()
	}
	render(){
		return html`
			<a @click = ${this.route} href=${this.href}>${this.text}</a>
		`
	}
}
VA.tag = "v-a"

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