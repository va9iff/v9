let capitalize = ([first, ...rest]) =>
	first ? first.toUpperCase() + rest.join("").toLowerCase() : ""

let frames = [
	"VΛ9IFF", // my username in everywhere
	"VΛ٩IFF", // arabic digit for 9
	"VΛgIFF", // my name in most countries
	"VΛٯIFF", // the letter in its original form
	"VΛqIFF", // my actual name (with one f)
	// yeah I know its lambda but it's a "reverse V" and "cool A" for me
	// wanted to include one more letter with different origin.
	// even tho it sounds different. I mean, I'm a guy who uses 9 for g :)
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
}, 1500)
