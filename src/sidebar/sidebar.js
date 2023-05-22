import { html, VLitElement } from "/src/vlit.js"

import "../v-router/v-router.js"

class VSidebar extends VLitElement {
	static properties = {
		v9: { reflect: true },
	}
	static props = {
		v9: 0,
		active: null,
	}
	content() {
		return html` <h2>Sup!</h2> `
	}
	v9max = 1
	headerClick(e) {
		this.v9++
		if (this.v9 > this.v9max) setTimeout(() => (this.v9 = 0), 999)
	}
	switch(active) {
		if (this.active == active) return (this.active = null)
		this.active = active
	}
	close() {
		// notifications.filter(notification=>notification.uid!=this.uid)
	}
	route(e){
		// event will always be itself cuz inner img has pointer-events: none
		if (e.target.href.split("#").pop()==window.location.hash.split("#").pop()){
			let a = document.createElement("a")
			// that's the route you go when you click the active sidebar button
			a.href = "#"
			a.onclick = e => this.route(e)
			document.body.appendChild(a)
			setTimeout(() => {
				a.click()
				a.remove()
			})
		}
		window.route(e)
		this.switch(window.location.hash)
	}
	connectedCallback(){
		super.connectedCallback()
		addEventListener("popstate", e => this.requestUpdate());

	}
	render() {
		return html`
			<div class="circle1">ga</div>
			<div class="header" v9=${this.v9} @click=${this.headerClick}>
				<span>
					V
				</span>
				<span class="reveal">
					A
				</span>
				<span>
					9
				</span>
				<span class="reveal">
					I
				</span>
				<span class="reveal">
					F
				</span>
				<span class="reveal">
					F
				</span>
			</div>
			<div class="content">
				<a 
					?active=${window.location.hash == "#dashboard"} 
					href = "#dashboard"
					@click=${this.route}>
						<!-- relative to the top cuz we use at
						top index.html I think. not so portable huh -->
						<!-- <img src="./icons/dashboard.png" alt="dashboard"> -->
						<img src="./src/sidebar/icons/dashboard.png" alt="dashboard">

				</a>
				<a 
					?active=${window.location.hash == "#network"} 
					href = "#network"
					@click=${this.route}>
						<img src="./src/sidebar/icons/network.png" alt="network">
				</a>
				<a 
					?active=${window.location.hash == "#projects"} 
					href = "#projects"
					@click=${this.route}>
						<img src="./src/sidebar/icons/projects.png" alt="projects">
				</a>
			</div>
					`
	}
}

VSidebar.tag = "v-sidebar"
