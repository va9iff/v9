import { html, VLitElement, styleMap } from "../vlit.js"
import {View} from "./view.js"

class VHome extends View {
	static properties = {
		v9: { reflect: true },
		x: {},
		y: {}
	}
	constructor(){
		super()
	}
	render() {
		return html` 
		<div class="content" fadeInOpacity>
		<div class="punchline" exclusion>
			<br>
				Not one of your template dependant "developers"
			</div>
		</div>
		<div class="metaeffect" @mousemove=${e=>{
			this.x = e.clientX
			this.y = e.clientY
			this.requestUpdate()
		}}>
			<div class="m1"></div>
			<div class="m2"></div>
			<div class="m3" style=${styleMap({
				left: this.x + "px",
				top: this.y + "px"
			})}></div>
			<div class="m4"></div>
			<div class="m5"></div>
		</div>
		<div class="metaballText" exclusion>
			My implementation of Metaballs. <br>
			Should perform better than Gaussian blur. <br>
			Optimized, also more visually appealing.

		</div>

		`
	}
}

VHome.tag = "v-home"
