let capitalize = ([first, ...rest]) =>
	first ? first.toUpperCase() + rest.join("").toLowerCase() : ""

let frames = [
	'V٩',
	'VГ',
	'ⰂГ',
	'Ⰲٯ',
	'Ɣٯ',
	'Ɣ𐰵',
	'W𐰵',
	'W٩',
]

window.currentTitleFrame = 0

window.updateTitle = () =>
	(document.querySelector("title").innerHTML =
		frames[window.currentTitleFrame] +
		" " +
		capitalize(window.location.hash.split("#").pop()))

setInterval(() => {
	window.currentTitleFrame = (window.currentTitleFrame + 1) % frames.length
	window.updateTitle()
}, 2000)
