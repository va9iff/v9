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

	// when scrolled tree, education's short explanation will go behind the name
	// the idea I currently have is to change its opacity to 0 like fading out 

	// when went over the name. also a scale transition may be applied. but
	// that's not the style I wanted to go with at all... so, no scale. or
	// maybe translateX(-x)
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
							university that university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br>
							university that is something of a some sis something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a <br> university that is something of a some sort of university and a 
							university that is something of a some sort of university and a university that is something of a some sort of university  a university that is something of a some sort of university and a university that is something of a some sort of university and a university that is something of a some sort of university and a 
							university that is something of a some sort of university and a university that is something of a some sort of university  a university that is something of a some sort of university and a university that is something of a some sort of university and a university that is something of a some sort of university and a 
							university that is something of a some sort of university and a university that is something of a some sort of university  a university that is something of a some sort of university and a university that is something of a some sort of university and a university that is something of a some sort of university and a 
							university that is something of a some sort of university and a university that is something of a some sort of university  a university that is something of a some sort of university and a university that is something of a some sort of university and a university that is something of a some sort of university and a 
							university that is something of a some sort of university and a university that is something of a some sort of university  a university that is something of a some sort of university and a university that is something of a some sort of university and a university that is something of a some sort of university and a 
							university that is something of a some sort of university and a university that is something of a some sort of university  a university that is something of a some sort of university and a university that is something of a some sort of university and a university that is something of a some sort of university and a 
							university that is something of a some sort of university and a university that is something of a some sort of university  a university that is something of a some sort of university and a university that is something of a some sort of university and a university that is something of a some sort of university and a 
							university that is something of a some sort of university and a university that is something of a some sort of university  a university that is something of a some sort of university and a university that is something of a some sort of university and a university that is something of a some sort of university and a 
							university that is something of a some sort of university and a university that is something of a some sort of university  a university that is something of a some sort of university and a university that is something of a some sort of university and a university that is something of a some sort of university and a 
							university that is something of a some sort of university and a university that is something of a some sort of university  a university that is something of a some sort of university and a university that is something of a some sort of university and a university that is something of a some sort of university and a 
							university that is something of a some sort of university and a university that is something of a some sort of university  a university that is something of a some sort of university and a university that is something of a some sort of university and a university that is something of a some sort of university and a 
							university that is something of a some sort of university and a university that is something of a some sort of university  a university that is something of a some sort of university and a university that is something of a some sort of university and a university that is something of a some sort of university and a 
							university that is something of a some sort of university and a university that is something of a some sort of university  a university that is something of a some sort of university and a university that is something of a some sort of university and a university that is something of a some sort of university and a 
							university that is something of a some sort of university and a university that is something of a some sort of university  a university that is something of a some sort of university and a university that is something of a some sort of university and a university that is something of a some sort of university and a 
							university that is something of a some sort of university and a university that is something of a some sort of university  a university that is something of a some sort of university and a university that is something of a some sort of university and a university that is something of a some sort of university and a 
							university that is something of a some sort of university and a university that is something of a some sort of university  a university that is something of a some sort of university and a university that is something of a some sort of university and a university that is something of a some sort of university and a 
							university that is something of a some sort of university and a university that is something of a some sort of university  a university that is something of a some sort of university and a university that is something of a some sort of university and a university that is something of a some sort of university and a 
							university that is something of a some sort of university and a university that is something of a some sort of university  a university that is something of a some sort of university and a university that is something of a some sort of university and a university that is something of a some sort of university and a 
							university that is something of a some sort of university and a university that is something of a some sort of university  a university that is something of a some sort of university and a university that is something of a some sort of university and a university that is something of a some sort of university and a 
							university that is something of a some sort of university and a university that is something of a some sort of university  a university that is something of a some sort of university and a university that is something of a some sort of university and a university that is something of a some sort of university and a 
							university that is something of a some sort of university and a university that is something of a some sort of university  a university that is something of a some sort of university and a university that is something of a some sort of university and a university that is something of a some sort of university and a 
						</div>
					</div>
				</div>
			</div>
		`
	}
}

VDashboard.tag = "v-dashboard"
