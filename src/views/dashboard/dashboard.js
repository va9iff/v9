import { html, VLitElement } from "/src/vlit.js"
import {View} from "../view.js"

await new Promise(r=>setTimeout(r,500))

class VDashboard extends View {
	static properties = {
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
	// mouse in to a circle of the tree will make the right pane explain it
	// UNEC - Azerbaijan State University of Economics is a university that...
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
						Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br>
						Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br>
						Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br>
						Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br>
						Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br>
						Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br>
						Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br>
						Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNECEducation - UNEC <br> Education - UNEC <br> Education - UNEC <br> Education - UNEC <br>
						Education - UNEC <br> Education - UNEC <br> Education - UNEC <br> Education - UNEC <br> Education - UNEC <br> Education - UNEC <br> Education - UNEC <br> Education - UNEC <br> Education - UNEC <br>
						</div>
						<div opacome class="shady-scroller texty">
							UNEC - Azerbaijan State University of Economics is a university that some <br>
							university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br>
							university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br>
							university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br>
							university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br>
							university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br>
							university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br>
							university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br>
							university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br>
							university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br>
							university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br>
							university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br>
							university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br>
							university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br>
							university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br>
							university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br>
							university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br>
							university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br>
							university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br>
							university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br>
							university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br>
							university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br>
							university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br>
							university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br>
							university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br>
						</div>
					</div>
				</div>
			</div>
		`
	}
}

VDashboard.tag = "v-dashboard"
