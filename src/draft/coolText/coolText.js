import { html, VLitElement } from "/src/vlit.js"

function coolify(str, opts) {
	return str
		.split("")
		.map(
			s =>
				`<span class="coolText ${opts?.extra ? "extra" : ""} ${opts?.class || ""} ${
					s == " " ? "white" : ""
				}" 
				>${s}</span>`
		)
		.join("")
}

document.body.innerHTML =
	coolify("Social Platforms") +
	"<br>" +
	coolify("and Network ") +
	coolify("Epmhesis", { extra: true/*, class: 'fasad'*/}) +
	"<br>" +
	coolify("and Continue") +
	"dada"

// custom color with {class: fasad} and .fasad { -- --highlight: #22f3; } in css