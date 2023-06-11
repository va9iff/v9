import { html, VLitElement, unsafeHTML, keyed, nothing } from "../../vlit.js"
import {View} from "../view.js"

class VCV extends View {
	render() {
		return html`
		<div class="content">
			<div class="center">
				<object data="https://va9iff.github.io/my/cv.pdf" type="application/pdf">
				  <p>Unable to display PDF file. <a href="https://va9iff.github.io/my/cv.pdf">Download</a> instead.</p>
				</object>
			</div>
			<a class="openPDF" target="blank" href="https://va9iff.github.io/my/cv.pdf" type="application/pdf">Click to view the document</a>
		</div>
		`
	}
}

VCV.tag = "v-cv"
