import { html, VLitElement, unsafeHTML } from "../../vlit.js"
import {View} from "../view.js"
import {coolify} from "../../coolText/coolText.js"

import "../../components/v-button/v-button.js"


let coolHTML = (...args) => unsafeHTML(coolify(...args))

// await new Promise(r=>setTimeout(r,500))

class VProjects extends View {
	static properties = {
	}
	render() {
		return html`
			<div opacome class="content">
				<div class="wrapper">
					<div class="skills" scrolly2>
						<v-button 
							text="Languages" 
							style="--active: hsl(120deg, 100%, 70%)">
						</v-button> <br>
						<v-button 
							text="Django" 
							class="glass"
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

						<br>
						<v-button 
							text="Profile">
						</v-button> 

						<br>
						<v-button 
							text="F">
						</v-button>
					</div>
					<div class="projectsColumn" scrolly>
						<div class="projects">
							<div class="list selecteds">
								<div class="title">
									<div class="activeSkills">
										<v-button 
											active
											text="JavaScript" 
											class="glass"
											style="--active: hsl(60deg, 100%, 70%); --passive: #222;">
										</v-button>
									</div>
									selecte projects
								</div>
								<div class="project">
									<div class="name">VanylUI</div>
								</div>
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
							<div class="list other">
								<div class="title">all projects</div>
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
						</div>
						p
					</div>
				</div>	
			</div>
		`
	}
}

VProjects.tag = "v-projects"
