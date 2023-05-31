export function coolify(str, opts) {
	let classes = []
	if (opts?.extra) classes.push("extra")
	if (opts?.super) classes.push("super")
	if (opts?.class) classes.push(opts.class)
	return (
		`<span class="coolText ${classes.length ? classes.join(" ") : ""}">` +
		str.split("").map(
				s => `<span>${s}</span>${s == " " ? " " : s == "\n" ? "<br>":""}`
			)
			.join("")+
		"</span>"
	)
}

// custom color with {class: fasad} and .fasad { -- --highlight: #22f3; } in css
