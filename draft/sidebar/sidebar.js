import { html, VLitElement } from "/src/vlit.js"

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
				<button ?active=${this.active == "dashboard"} 
				@click=${e =>
					this.switch(
						"dashboard"
					)}><img src="./icons/dashboard.png" alt="dashboard"></button>
				<button ?active=${this.active == "network"} 
				@click=${e =>
					this.switch(
						"network"
					)}><img src="./icons/network.png" alt="network"></button>
				<button ?active=${this.active == "projects"} 
				@click=${e =>
					this.switch(
						"projects"
					)}><img src="./icons/projects.png" alt="projects"></button>
			</div>
					`
	}
}

VSidebar.tag = "v-sidebar"
