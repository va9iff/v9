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
							fasad <br>fasad <br>fasad <br>fasad <br>fasad <br>
							fasad <br>fasad <br>fasad <br>fasad <br>fasad <br>
							fasad <br>fasad <br>fasad <br>fasad <br>fasad <br>
							fasad <br>fasad <br>fasad <br>fasad <br>fasad <br>
							fasad <br>fasad <br>fasad <br>fasad <br>fasad <br>
							fasad <br>fasad <br>fasad <br>fasad <br>fasad <br>
							fasad <br>fasad <br>fasad <br>fasad <br>fasad <br>
							fasad <br>fasad <br>fasad <br>fasad <br>fasad <br>
							fasad <br>fasad <br>fasad <br>fasad <br>fasad <br>
						</div>
						<div opacome class="shady-scroller texty">
							Education - UNEC <br>
							Education - UNEC <br>
							Education - UNEC <br>
							Education - UNEC <br>
							Education - UNEC <br>
							Education - UNEC <br>
							Education - UNEC <br>
							Education - UNEC <br>
							Education - UNEC <br>
							Education - UNEC <br>
							Education - UNEC <br>
							Education - UNEC <br>
							Education - UNEC <br>
							Education - UNEC <br>
							Education - UNEC <br>
							Education - UNEC <br>
							Education - UNEC <br>
							Education - UNEC <br>
							Education - UNEC <br>
							Education - UNEC <br>
							Education - UNEC <br>
							Education - UNEC <br>
							Education - UNEC <br>
							Education - UNEC <br>
							Education - UNEC <br>
							Education - UNEC <br>
						</div>
					</div>
				</div>
			</div>
		`
	}
}

VDashboard.tag = "v-dashboard"
