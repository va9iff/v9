import {coolify} from "./coolText.js"

document.body.innerHTML +=	coolify(`
	Social Platforms
	and Network
	`) + coolify("Epmhesis \n", { extra: true /*, class: 'fasad'*/ }) +
		coolify(`and Continue.

			Sometimes, you have to bring something`)+ `<i>${coolify(" super", {super: true})}</i>` +
		"that's just a normal text"
