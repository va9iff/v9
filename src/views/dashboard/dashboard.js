import { html, VLitElement, classMap, unsafeHTML } from "../../vlit.js"
import {View} from "../view.js"

// await new Promise(r=>setTimeout(r,500))

const treeContent = [
	{
		title: html`<span>Education</span>`,
		desc: html`
		<div>
		Cyber-Security student <br><br>
				<span o5>at</span> Azerbaijan State <br>
				University <span o5>of</span> Economics (UNEC) <br><br>
				Bachelor's degree - senior year
		</div>

		`,
		getContent: async () => {
			// await import("./treeContent/Education.js")
			// return html`<treecontent-education></treecontent-education>`
			return unsafeHTML(await fetch("./src/views/dashboard/treeContent/Education.html").then(res=>res.text()))
		}
	},
	{
		title: html`<span>Cyber-Security</span>`,
		desc: html`<div>
		Cybersecurity Analyst Professional Certificate <br><br>
		<span o5>by</span> IBM

		`,
		getContent: async () => {
			await import ("./treeContent/Cyber-Security.js")
			return html`<treecontent-cyber-security></treecontent-cyber-security>`
		}
	},
	{
		title: html`<span>JavaScript</span>`,
		desc: html`
		<div>
			More than 3 years of experience. <br>
			Numerous projects and libraries. <br>
		</div>

		`,
		getContent: async () => {
			// return html`
				// Everything on this portfolio is all about my JavaScript skills. <br><br>
				// Head to the projects to see more.
			// `
			return unsafeHTML(await fetch("./src/views/dashboard/treeContent/JavaScript.html").then(res=>res.text()))

		}
	},
	{
		title: html`<span>Location</span>`,
		desc: html`Baku, Azerbaijan. <br> Earth, Solar System, <br> Milky Way, the Local Group.`,
		// Azerbaijan, Baku. <br> 
		// Narimanov district, <br> 
		getContent: async () => html`
		Ataturk avenue (approximate) <br><br>
		<a href="#network">Contact</a> for more information.
		`
	},
]

class VDashboard extends View {
	static properties = {
		activeTreeNum: {},
		shownContent: {},
		glowing: {},
		contentIsLoading: {}
	}
	scroll(e){
		// console.log(this.scrollTop)
		// this.classList.toggle("red", Math.random() > 0.05) // fun
		this.classList.toggle("scrolled", this.scrollTop > 160)
	}
	constructor(){
		super()
		this.addEventListener("scroll", e=>this.scroll(e))
	}
	async circleIn(row){
		if (this.glowing == row.title) return null
		this.glowing = row.title
		this.shownContent = html`Loading ${row.title}...`
		this.contentIsLoading = true
		this.shownContent = await row.getContent()
		this.contentIsLoading = false
		console.log('inned')
	}
	render() {
		return html`
			<div class="content">
				<div class="head">
					<img src="./img/me.jpg" class="me" alt="">
					<div opacome class="name">
						<h1 class="english">
							Vagif Valiyev
						</h1>
						<h1 class="native">
							Vaqif Vəliyev
						</h1>
						<div class="line"></div>
					</div>
				</div>

				<div class="about">
					<div class="split2col">
						<div class="mytree">

						${treeContent.map(row=>html`
							<div class="treeRow" ?ontop = ${this.glowing == row.title} @click=${e=>this.circleIn(row)}>
								<div class="treeTitle" opacome>${row.title}</div>
								<div class="divider" opacome>
									<div class=${classMap({
										circle: true,
										active: this.glowing == row.title,
									})} @mouseenter=${e=>this.circleIn(row)}></div>
								</div>
								<div class="treeDesc" opacome>${row.desc}</div>
							</div>
							`)}
						</div>
						<div opacome class=${classMap({
							texty: true,
							loading: this.contentIsLoading,
						})}>
						<div class="scroll-content" scrolly2>
							${this.shownContent}
						</div>
						</div>
					</div>
				</div>
			</div>
		`
	}
}

VDashboard.tag = "v-dashboard"
