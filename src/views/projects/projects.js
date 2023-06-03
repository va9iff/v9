import { html, VLitElement, unsafeHTML } from "../../vlit.js"
import {View} from "../view.js"
import {coolify} from "../../coolText/coolText.js"

import "../../components/v-button/v-button.js"


let coolHTML = (...args) => unsafeHTML(coolify(...args))

await new Promise(r=>setTimeout(r,500))

class VProjects extends View {
	static properties = {
	}
	render() {
		return html`
			<div class="content">
				<div class="wrapper">
					<div class="skills">
					<v-button 
						text="Profile">
					</v-button>
					<v-button 
						text="Django" 
						style="--active: hsl(120deg, 100%, 70%)">
					</v-button>
					<v-button 
						active
						text="Python" 
						class="glass"
						style="--active: hsl(207deg, 100%, 70%)">
					</v-button>
					<v-button 
						active
						text="JavaScript" 
						class="glass"
						style="--active: hsl(60deg, 100%, 70%); --passive: #222;">
					</v-button>
					<v-button 
						active
						text="SASS" 
						class="glass"
						style="--active: hsl(330deg, 100%, 70%);">
					</v-button>

					<v-button/ 
						text="GitHub" 
						class="glass"
						style="--active: hsl(153deg, 100%, 70%); --passive: #131313">
					</v-button>
					<v-button 
						text="F">
					</v-button>
					</div>
					<div class="projectsScroll">
						<div class="activeSkills">
							<v-button 
								active
								text="JavaScript" 
								class="glass"
								style="--active: hsl(60deg, 100%, 70%); --passive: #222;">
							</v-button>

						</div>
						<div class="projects">
						VanylUI
						<br>
						VanylUI
						<br>
						VanylUI
						<br>
						VanylUI
						<br>
						VanylUI
						<br>
						VanylUI
						<br>
						VanylUI
						<br>
						VanylUI
						<br>
						VanylUI
						<br>
						VanylUI
						<br>
						VanylUI
						<br>
						VanylUI
						<br>
						VanylUI
						<br>
						VanylUI
						<br>
						VanylUI
						<br>
						VanylUI
						<br>
						VanylUI
						<br>
						VanylUI
						<br>
						VanylUI
						<br>
						VanylUI
						<br>
						VanylUI
						<br>
						VanylUI
						<br>
						VanylUI
						<br>
						VanylUI
						<br>
						VanylUI
						<br>
						VanylUI
						<br>
						VanylUI
						<br>
						VanylUI
						<br>
						VanylUI
						<br>
						VanylUI
						<br>
						VanylUI
						<br>
						VanylUI
						<br>
						VanylUI
						</div>
						p
					</div>
				</div>	
			</div>
		`
	}
}

VProjects.tag = "v-projects"
