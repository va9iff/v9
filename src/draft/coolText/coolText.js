import { html, VLitElement } from "/src/vlit.js"

function coolify(str, opts) {
	let classes = []
	if (opts?.extra) classes.push("extra")
	if (opts?.class) classes.push(opts.class)
	return (
		'<span class="coolText">' +
		str.split("").map(
				s => `<span${classes.length ? ` class = ${classes.join(" ")}` : ""}>${s}</span>${s == " " ? " " : s == "\n" ? "<br>":""}`
			)
			.join("")+
		"</span>"
	)
}

document.body.innerHTML =	coolify(`
	Social Platforms
	and Network
	`) + coolify("Epmhesis", { extra: true /*, class: 'fasad'*/ }) +
		"<br>" +
		coolify("and Continue") +
		"dada"
// custom color with {class: fasad} and .fasad { -- --highlight: #22f3; } in css
