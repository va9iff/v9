let impactHolder = document.querySelector("#impactHolder")
let superImpactIdx = 3
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
document.addEventListener("click", e => {
	let [x, y] = [e.clientX, e.clientY]
	let impact = addImpact(x, y)
	if (impacts.length >= superImpactIdx) {
		impact.classList.add("super")
		setTimeout(() => impacts.shift().remove(), 1000)
	} else {
		setTimeout(() => impacts.shift().remove(), 800)
	}
})
