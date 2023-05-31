import { html, VLitElement, classMap } from "../../../vlit.js"
await new Promise(r=>setTimeout(r,500))


class TreeContentEducation extends VLitElement {
	render() {
		return html`
		With <b>over 80%</b> result in placement exam, I choose Cyber-Security in one 
		of the most prestigious universities - UNEC in the country. <br><br>

		My yearly GPAs are <b>96%</b>, <b>77%</b> and ~<b>84%</b> (current). <br><br>

		Other than classes, I participate in every activity about this sphere. 
		`
	}
}

TreeContentEducation.tag = "treecontent-education"
