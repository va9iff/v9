import { html, VLitElement, unsafeHTML } from "../../vlit.js"
import {View} from "../view.js"
import {coolify} from "../../coolText/coolText.js"

let coolHTML = (...args) => unsafeHTML(coolify(...args))

await new Promise(r=>setTimeout(r,500))

class VProjects extends View {
	static properties = {
	}

	render() {
		return html`
			<div class="bg" opacome></div>
			<div opacome class="content">
				${coolHTML("All my")} ${coolHTML("projects", {super: true})} ${coolHTML("will be shown here. If you don't want to wait, you can check my")}
				${coolHTML("GitHub repos")} <a href="https://github.com/va9iff"><nobr>${coolHTML("@va9iff",{extra: true})}</nobr></a>.
				${coolHTML("Vanyl, Ranture and Won projects will definitely be here. ")}
			</div>
		`
	}
}

VProjects.tag = "v-projects"
