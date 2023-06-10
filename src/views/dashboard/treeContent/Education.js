import { html, VLitElement, classMap } from "../../../vlit.js"
await new Promise(r=>setTimeout(r,500))


class TreeContentEducation extends VLitElement {
	render() {
		return html`
		I am an ambitious and dedicated cyber-security student nearing the 
		completion of my third year at Azerbaijan State University 
		of Economics (UNEC). Scored above 80% in
		my placement exam, demonstrating my commitment to 
		academic excellence. <br><br>

		In my earlier years at university, I excelled with a 
		remarkable GPA of 96%, showcasing my strong 
		foundational knowledge and dedication to my studies. While my
		GPA dipped to 77% temporarily, I quickly 
		rebounded and currently maintain a solid GPA of ~84%. This upward 
		trajectory demonstrates my resilience and ability to adapt to 
		challenges, further fueling my motivation to excel in the field 
		of cyber-security. <br><br>

		While excelling academically, I also actively engaged in various events 
		and activities within the cyber-security and software engineering 
		domains. I eagerly participate in every opportunity to expand
		my knowledge, network with professionals, and stay 
		updated with the latest advancements. By immersing myself in these 
		events, I continuously enhance my understanding of real-world 
		applications and industry trends.<br>

		Recognized for my aptitude and diligence, I have been handpicked 
		by esteemed professors to contribute to pivotal projects and 
		represent my university in competitions. These experiences have further
		sharpened my skills, provided invaluable practical insights, 
		and strengthened my resolve to make a significant 
		impact in my projects. <br><br>

		In addition to my academic achievements, I possess a strong 
		proficiency in JavaScript, a versatile programming language widely 
		used in front-end application development and also in back
		-end. My mastery of JavaScript empowers me to 
		develop robust and secure applications, effectively addressing 
		emerging challenges in the digital landscape. This expertise 
		has been honed through a combination of formal coursework and 
		independent exploration.
		`
	}
}

TreeContentEducation.tag = "treecontent-education"
