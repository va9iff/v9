import { html, VLitElement, unsafeHTML, keyed, nothing } from "../../vlit.js"
import {View} from "../view.js"
import {coolify} from "../../coolText/coolText.js"

import "../../components/v-button/v-button.js"


let coolHTML = (...args) => unsafeHTML(coolify(...args))

let cool = (strings, ...bosh) => unsafeHTML(coolify(strings[0], {super: true}))


// await new Promise(r=>setTimeout(r,500))

const projects = [
	{
		name: "VanylUI",
		type: "Most Complicated",
		typeStyle : `color: hsla(0deg, 100%, 60%, 0.5)`,
		link: "https://github.com/va9iff/vanyl",
		headline: "Declerative, Performant JavaScript Component Library (Powered With Tagged Functions)",
		description: html`Aside from built in 2 way data binding, 
		uses the library TheJS which also is written by me to assign dynamic 
		properties and adds up its own middle ware to deal with DOM API. <br><br>

		The API documentation isn't complete yet. Only the template syntax and 
		a way to make imperative updates are shown. The native components aren't 
		even talked about at all. <br>
		This project is my most complicated project 
		and explaining it at this stage would be too technical. It is complete 
		but not enough to rely on for everything. So a bit time is needed. 
		Probably will be after this summer.
		`,
		tags: ["JavaScript", "DOM"],
	},
	{
		name: "Fudir",
		// hsl(152,45,84)
		type: "Complicated",
		typeStyle : `color: hsla(0deg, 100%, 60%, 0.5)`,
		link: "https://va9iff.github.io/fudir/",
		headline: "Local restaurant management system",
		description: html`
		Easily build your own menu with your food and price. Offer discounts for 
		big orders with Sets and Combo Menus. Clients are managed by the 
		tables so you can have 2 parallel ongoing checks and add the clients' 
		orders progressively to their tables. Once the client is done, you 
		get their checks with 1 click and the results are calculated to give 
		you a daily summary. all your data is saved locally and can be exported 
		as CSV file.
		Admin password: 2024 (Menu is only editable with the admin password. 
		All your edits are visible to your menu since this app is supposed to
		work locally.)
		`,
		tags: ["JavaScript", "DOM"],
	},
	{
		name: "WON",
		headline: "Web OS",
		type: "Complicated",
		typeStyle : `color: hsla(-30deg, 100%, 60%, 0.5)`,
		link: "https://va9iff.github.io/WON/",
		description: html`
		Although the project is called an "OS" WON is actually an interface for 
		an operating system. It's a web implementation of window management 
		system with the functioning apps and its API to make apps. <br><br>

		The main idea : Backendless fully cloud OS on the web with 1 sign in away 
		<br><br>

		It didn't have any processing going on the backend. All WON need is the 
		files. Everything done on the frontend. Then just written to a place. 
		Users can use their Google Drive to store their WON ROM or have their 
		data on their own. It's also possible to adapt an literal OS to WON at
		some point.
		`,
		// img: "./src/views/projects/imgs/WON.png",
		carousel: ["./src/views/projects/imgs/WON.png",],
		tags: ["JavaScript"],
	},
	{
		name: "Ranture",
		headline: "Sophisticated iteration library",
		type: "Decent",
		typeStyle: `color: hsla(103deg, 100%, 80%, 0.5)`,
		link: "https://www.npmjs.com/package/ranture",
		description: html`
		Using object keys as argument, Ranture can set up an iteration you like with its simple syntax. 
		No need for range() or manually programming to stop at a random point with maximum. 
		Ranture also gives a nice methods for arrays to structure a mock object in a more readable way. <br>
		See the package in npm.
		`,
		// img: "./img/me.jpg",
		tags: ["JavaScript"],
	},
	{
		name: "Tesol",
		headline: "Zen testing platform",
		type: "Decent",
		typeStyle: `color: hsla(103deg, 100%, 80%, 0.5)`,
		link: "https://va9iff.github.io/tesol/",
		description: html`
		<div>
			Aside from being a platform, this open-source project defines its own
			language to write tests on top of HTML. Which means you can not only 
			write traditional tests in ease, but also design tests with media such 
			as sounds from Google Drive or wherever you like, put YouTube videos
			and literally anything that's possible on the web. <br> <br>
			When Tesol was designing, the ${cool`mobile experience`} was always mattered the 
			most. You can:
			<ul style="margin-left: 40px">
				<li>
					Swipe your finger to switch back-n-fore between questions. 
				</li>
				<li>
					Bring the answers down near to your finger.
				</li>
				<li>
					Switch to its own dark theme
				</li>
			</ul> <br>
			The other most striking feature Tesol is that its overall user 
			experience. To be more specific, 
			${cool`users never waits for loading`}. 
			The questions of the test are pre-loaded. This makes Tesol work 
			seamless smooth. <br> <br> 

			With all these features, Tesol also has mode to go even more "zen". 
			There's a mode which will tell the user their answer is whether 
			right or wrong when they select immediately. <br><br>

			Is there a downside of pre-loading? No. <br>
			The questions are stored in a text file. Any external media 
			will be loaded when question is rendered. <br> 
			Sure, it'll load a bit late. But this loading will happen only once.
		</div>
		`,
		tags: ["JavaScript"]
	},
	{
		name: "Old Portfolio",
		headline: "Wasn't a template guy since back in 2021 :)",
		type: "Old",
		typeStyle: `color: hsla(303deg, 100%, 80%, 0.5)`,
		link: "https://va9iff.github.io/Portfolio/",
		tags: ["JavaScript", "JavaScript", "SASS", "DOM", "HTML", "CSS"],
		description: html`
		<div>
			The projects pane is under the page. When user clicks the "Projects", 
			the current page flow will be wrapped to left and the projects will 
			be shown. <br><br>
			Also another css trick that I came up with is to rotate the 
			container 90 degrees. Then I rotated every element in it -90 degree. 
			I had a vertical scrolling element that works with native mouse 
			scroll. Big problem was that - their spacing was based of height. 
			Since they think they're stacked vertically. So I gave them 
			appropriate heights and width simulating their vertical stacking. <br><br>
			<b>${cool`Bonus:`}</b> you can find my old projects in this portfolio
		</div>
		`,
	},
	{
		name: "ReadyJS",
		type: "little",
		typeStyle: `color: #9ff8;`,
		headline: html`Utility class - one time method`,
		tags: ["JavaScript"],
		link: "https://github.com/va9iff/ReadyJS/blob/main/ready.js",
		description: html`
		ReadyJS has a class called Ready to be inherited. This class's ready() 
		method will be fired on first instantiation. When I was building a game 
		engine, needed this behavior and made this little library.
		`,
	},

	{
		name: "V9",
		type: "Currently viewing",
		typeStyle: `color: hsla(240deg, 100%, 80%, 0.5)`,
		headline: html`This Portfolio Itself`,
		tags: ["JavaScript", "Lit", "CSS", "GitHub"],
		link: "#dashboard",
		description: html`
		As being the newest project, this is one of the most sophisticated 
		webpages I've built. Every micro animations and URL transitions 
		were carefully designed. Those chip buttons on left, filtering, 
		pop-culture-design in network page and sticky tricks in the dashboard. 
		Could use a template or pre-built components, but so every one can. 
		Everything on this page was made by myself, as my message says in the 
		hidden message page :) 
		`,
	},

	// {
	// 	name: "Startup Design ",
	// 	headline: "Real Estate Marketplace App Startup",
	// 	description: `After signing up, users can check sale or rental real estate near
	// 	by map.
	// 	`,
	// 	carousel: ["./img/me.jpg","./img/me.jpg","./img/me.jpg"],
	// 	tags: ["Figma", "GitHub"]
	// },
	// {
	// 	name: "Ranture2", // name is required to ditungish and should be unique
	// 	raw: html`
	// 	<div class="project">
	// 		<div class="name"><b>Ranture</b></div>
	// 	<div style="background-color: red">a mad one</div>
	// 		<div class="headline"></div>
	// 		<div class="content">
	// 			<div class="imgs" scrolly2>
					
	// 			</div>
	// 			<div class="content">
					
	// 			</div>
	// 		</div>
	// 	</div>`,
	// },
]

let skills = [
	{
		category: "Web",
		subCats: [
			{
				cat: "Libraries", 
				skills: ["ReactJS", "Lit", "SvelteJS"]
			},
			{
				cat: "Languages", 
				skills: ["HTML", "CSS", "JavaScript"]
			}
		],
		style: `--active: hsl(0, 0%, 100%);`,
		skills: [ 
			// {
				// skill: "Django",
				// style: `--active: hsl(120deg, 100%, 70%)`
			// },
			{
				skill: "HTML",
				style: `--active: hsl(12deg, 100% , 70%)`
			},
			{
				skill: "CSS",
				style: `--active: hsl(180deg, 100%, 70%)`
			},
			{
				skill: "JavaScript",
				style: `--active: hsl(60deg, 100%, 70%); --passive: #222;`,
				about: `I can make whatever you can imagine. To make what you're 
				unable to imagine is just gon' take a bit time.`
			},
			{
				skill: "TypeScript" ,
				style: `--active: hsl(200deg, 100%, 70%);`
			},
			{
				skill: "SASS" ,
				style: `--active: hsl(330deg, 100%, 70%)`
			},
			{
				skill: "ReactJS",
				style: `--active: hsl(193deg,100%,66%)`
			},
			{
				skill: "SvelteJS",
				style: `--active: hsl(33deg,100%,66%)`
			},
			{
				skill: "Lit",
				style: `--active: hsl(193deg,100%,66%)`
			},
			{
				skill: "ExpressJS",
				style: `--active: hsl(233deg,100%,66%)`

			}
		]
	},
	{
		category: "Design",
		style: `--active: hsl(160deg, 100%, 70%);`,
		skills: [ 
			{
				skill: "Figma",
				style: "--active: hsl(266deg, 92%, 66%)",
				isActive: true
			},
			{
				skill: "Gimp",
				style: `--active: hsl(80deg, 100%, 70%);`
			},
			{
				skill: "Inkspace",
				style: `--active: hsl(230deg, 100%, 70%);`
			},
		]
	},
	{
		category: "Platforms",
		style: `--active: hsl(223deg, 100%, 70%)`,
		skills: [ 
			{
				skill: "GitHub",
				style: `--active: hsl(153deg, 100%, 70%);`
			},
			{
				skill: "FireBase",
				style: `--active: hsl(30deg, 100%, 70%);`
			}
		]
	},
	{
		category: "Other",
		style: `--active: hsl(111deg, 100%, 70%)`,
		skills: [
			{
				skill: "Python" ,
				style: `--active: hsl(207deg, 100%, 70%)`
			},
		]

	},
]

const allSkills = skills.map(category=>({...category.skills, category})).flat(1)

class VProject extends VLitElement{
	static properties = {
		project: {}
	}
	render(){
		let { project } = this
		return html`
		<a class="project" href=${project.link ?? nothing} target="blank">
				<div class="name"><b>${project.name}</b><span class="type" style="${project.typeStyle}" vtype=${project.type}>${project.type}</span></div>
				<div class="headline">${project.headline}</div>
				<div class="content">
					${project.img ? html` <div class="imgs">
						<img src=${project.img}>
					</div>` : html``}
					<div class="description">
						${project.description}
					</div>
				</div>
				${project.carousel?.length>0 ? html`
				<div class="carousel" scrolly2>
					${project.carousel.map(src=>html`<img src=${src}>`)}
				</div>
				` : html``}
		</a>
		`
	}	
}

VProject.tag = "v-project"

class VProjects extends View {
	static properties = {
		activeSkills: {}
	}
	constructor(){
		super()
		this.activeSkills = []
	}
	skillClick(skill){
		if (this.activeSkills.includes(skill)){
			this.activeSkills = this.activeSkills.filter(_skill=>_skill!=skill)
		} else {
			this.activeSkills = [...this.activeSkills, skill]
		}
	}
	firstUpdated(){
		super.firstUpdated()
		this.projectsColumn = this.querySelector(".projectsColumn")
	}
	updated(changedProperties){
		super.updated(...arguments)
		// let oldActiveSkills =  changedProperties.get("activeSkills")
		// if (this.activeSkills.length == 1 || this.activeSkills.length == 0)
		// if (this.activeSkills.length > this.oldActiveSkillsLength)
		if(changedProperties.has("activeSkills"))
			// this.projectsColumn.scrollTop = 0
			this.projectsColumn.scrollTo({top: 0, behavior: "smooth"})

		// this.oldActiveSkillsLength = this.activeSkills.length
	}
	categoryClick(category){
		if (category.skills.every(skill=>this.activeSkills.includes(skill)))
			return category.skills.forEach(categorySkill=>this.activeSkills = this.activeSkills.filter(_skill=>_skill!=categorySkill))
		for(let skill of category.skills)
			if (!this.activeSkills.includes(skill))
				this.activeSkills = [...this.activeSkills, skill]
	}
	subCatClick(subCat, category){
		console.log('subCatSkills')
		let subCatSkills = category.skills.filter(skill=> subCat.skills.includes(skill.skill))
		if (subCatSkills.every(skill=>this.activeSkills.includes(skill)))
			return subCatSkills.forEach(subCatSkill=>this.activeSkills = this.activeSkills.filter(_skill=>_skill!=subCatSkill))
		for(let skill of subCatSkills)
			if (!this.activeSkills.includes(skill))
				this.activeSkills = [...this.activeSkills, skill]
	}
	render() {
		let selectedSkillProjects = projects.filter(project=>project.tags?.some(tag=>this.activeSkills.map(skill=>skill.skill).includes(tag)))
		let otherProjects = projects.filter(project=>!selectedSkillProjects.includes(project))
		return html`
			<div opacome class="content">
				<div class="wrapper">
					<div class="skills" scrolly2 >
						${skills.map(
							category=>html`
								<br> <v-button 
									@click = ${e => this.categoryClick(category)}
									?active = ${category.skills.every(skill=>this.activeSkills.includes(skill))}
									text=${category.category} 
									class="category"
									style=${category.style}>
								</v-button> 
								${category.subCats?.map(subCat=>html`
									<v-button 
										text = ${subCat.cat}
										?active = ${subCat.skills.every(s=>this.activeSkills.map(as=>as.skill).includes(s))}
										@click = ${e=>this.subCatClick(subCat, category)}
										class = "subCat"
									></v-button>
									`)}
								<br> 
								${
									category.skills.map(skill=>html`
									<v-button 
										?active = ${this.activeSkills.includes(skill)}
										@click = ${e=>{
											this.skillClick(skill)
										}}
										.text=${skill.skill} 
										style=${skill.style}
										class="glass"
									</v-button>
									`)
								}
							`
							)}

						<br>
					</div>
					<div class="projectsColumn" scrolly>
						<div class="projects">
							${this.activeSkills.length > 0 ? html`<div class="list selecteds">
								<div class="title">
									<div class="activeSkills">
										${this.activeSkills.map(skill=>html`
											<v-button 
												active
												text=${skill.skill} 
												class="glass"
												@click = ${e=>this.activeSkills = this.activeSkills.filter(_skills=>_skills!=skill)}
												style=${skill.style}>

											</v-button>											
										`)}
									</div>
									<p>Selected skills applied projects</p>
								</div>
								${selectedSkillProjects.length ? selectedSkillProjects.map(project=>keyed(project.name, project.raw ?? html`
																	<v-project
																		.project = ${project}
																	></v-project>
																`)) : html`There's no project record with the selected skills registered yet`}
							</div>` : html``}
							<div class="list other">
								<div class="title" ?selectedsGone=${this.activeSkills.length == 0}>${this.activeSkills.length > 0 ? "All projects" : "Select skills from left pane to filter the projects"}</div>
								${otherProjects.map(project=>project.raw ?? html`
									<v-project
										.project = ${project}
									></v-project>
								`)}
							</div>
						</div>
					
					</div>
				</div>	
			</div>
		`
	}
}

VProjects.tag = "v-projects"
