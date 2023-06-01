import { html, VLitElement, classMap } from "../../vlit.js"
import {View} from "../view.js"

await new Promise(r=>setTimeout(r,500))

const treeContent = [
	{
		title: "Education",
		desc: html`
		<div>
		Cyber-Security student <br><br>
				<span o5>at</span> Azerbaijan State <br>
				University <span o5>of</span> Economics (UNEC) <br><br>
				Bachelor's degree - senior year
		</div>

		`,
		getContent: async () => {
			await import("./treeContent/Education.js")
			return html`<treecontent-education></treecontent-education>`
		}
	},
	{
		title: "Location",
		desc: html`Baku, Azerbaijan`,
		getContent: async () => html`
		Azerbaijan, Baku. <br> 
		Narimanov district, <br> 
		Ataturk avenue (approximate) <br><br>
		<a href="#network">Contact</a> for more information.
		`
	},
	{
		title: "Cyber-Security",
		desc: html`<div>
		Cybersecurity Analyst Professional Certificate <br><br>
		<span o5>by</span> IBM

		`,
		getContent: async () => {
			await import ("./treeContent/Cyber-Security.js")
			return html`<treecontent-cyber-security></treecontent-cyber-security>`
		}
	}
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
		this.shownContent = `Loading ${row.title}...`
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
						<div class="scroll-content">
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
