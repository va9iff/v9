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
		console.log(this.v9)
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
		console.log(e.target)
		window.route(e)
		this.switch(window.location.hash)
		console.log(this.active)
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
				<span class="reveal">
			</div>
			<div class="content">
				<a 
					?active=${window.location.hash == "#dashboard"} 
					href = "#dashboard"
					@click=${this.route}>
						<img src="./icons/dashboard.png" alt="dashboard">
				</a>
				<a 
					?active=${window.location.hash == "#network"} 
					href = "#network"
					@click=${this.route}>
						<img src="./icons/network.png" alt="network">
				</a>
				<a 
					?active=${window.location.hash == "#projects"} 
					href = "#projects"
					@click=${this.route}>
						<img src="./icons/projects.png" alt="projects">
				</a>
			</div>
					`
	}
}

VSidebar.tag = "v-sidebar"
