let impactHolder = document.querySelector("#impactHolder")
let superImpactIdx = 4
let impacts = []
window.impacts = impacts
function addImpact(x, y) {
	let impact = document.createElement("div")
	impact.className = "impact"
	impact.style.left = x + "px"
	impact.style.top = y + "px"
	impactHolder.appendChild(impact)
	impacts.push(impact)
	return impact
}
let r = ()=>Math.random()
let spread = 30
document.addEventListener("click", e => {
	let [x, y] = [e.clientX, e.clientY]
	if (impacts.length + 1 >= superImpactIdx){ 
		x += spread * r() - spread * 0.5
		y += spread * r() - spread * 0.5
	}
	let impact = addImpact(x, y)
	if (impacts.length >= superImpactIdx) {
		impact.classList.add("super")
		// impact.style.filter = `hue-rotate(${360*Math.random()}deg)`
		impact.style.background = `radial-gradient(#0000, hsl(${248-45+r()*90}deg, 35%, 50%))`
		setTimeout(() => impacts.shift().remove(), 1000)
	} else {
		setTimeout(() => impacts.shift().remove(), 800)
	}
})
