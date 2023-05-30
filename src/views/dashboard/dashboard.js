import { html, VLitElement, classMap } from "/src/vlit.js"
import {View} from "../view.js"

await new Promise(r=>setTimeout(r,500))

const treeContent = [
	{
		title: "High scoolmush",
		desc: html`at Azerbaijan State University of <br>
			Economics (UNEC)`,
		getContent: async () => {
			await new Promise(r => setTimeout(r, 1600))
			return html`contentus contentami contama`
		}
	},
	{
		title: "Education",
		desc: html`at Azerbaijan State University of <br>
			Economics (UNEC)`,
		getContent: async () => {
			return html`UNEC - Azerbaijan State University of Economics is a university that some <br>
			university that university and a university that is something of a some sort of university 
			and a university that is something of a some sort of university and a university that is 
			something of a some sort of university and a`
		}
	},
	{
		title: "Some cont",
		desc: html`That's from tree content const`,
		getContent: async () => html`some content`
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
		this.shownContent = `Loading for ${row.title}...`
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
						<div class="shady-scroller">
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
