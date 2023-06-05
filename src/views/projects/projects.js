import { html, VLitElement, unsafeHTML } from "../../vlit.js"
import {View} from "../view.js"
import {coolify} from "../../coolText/coolText.js"

import "../../components/v-button/v-button.js"


let coolHTML = (...args) => unsafeHTML(coolify(...args))

// await new Promise(r=>setTimeout(r,500))

const projects = [
	{
		name: "VanylUI",
		headline: "Declerative, Performant JavaScript Component Library (Powered With Tagged Functions)",
		description: "Aside from built in 2 way data binding lazy, Vanyl doesn't have any knowledge about your data so, when it's changed, you should call update."
	},
	{
		name: "Ranture",
		headline: "Sophisticated iteration library",
		description: `
		Using object keys as argument, Ranture can set up an iteration you like with its simple syntax. 
		No need for range() or manually programming to stop at a random point with maximum. 
		Ranture also gives a nice methods for arrays to structure a mock object in a more readable way.`,
		img: "./img/me.jpg",
		tags: ["JavaScript"],
	},
	{
		name: "Design",
		headline: "one of my design project",
		description: `this has a few more images than usual`,
		carousel: ["./img/me.jpg","./img/me.jpg","./img/me.jpg"]
	},
	{
		name: "Ranture2", // name is required to ditungish and should be unique
		raw: html`
		<div class="project">
			<div class="name"><b>Ranture</b></div>
		<div style="background-color: red">a mad one</div>
			<div class="headline"></div>
			<div class="content">
				<div class="imgs" scrolly2>
					
				</div>
				<div class="content">
					
				</div>
			</div>
		</div>`,
	},
	{
		name: "ReadyJS",
		headline: "utility class to inherit",
		description: `
		ReadyJS has a class called Ready to be inherited. This class's ready() method will be fired on first
		instantiation. When I was building a game engine, needed this behavior and made this little library.
		`,
	},
]

let skills = [
	{
		category: "languages",
		style: `--active: hsl(120deg, 100%, 70%)`,
		skills: [ 
			{
				skill: "Django",
				style: `--active: hsl(120deg, 100%, 70%)`
			},
			{
				skill: "Figma",
				style: "--active: hsl(266deg, 92%, 66%)",
				isActive: true
			},
			{
				skill: "Python" ,
				style: `--active: hsl(207deg, 100%, 70%)`
			},
			{
				skill: "JavaScript",
				style: `--active: hsl(60deg, 100%, 70%); --passive: #222;`,
				about: `I can make whatever you can imagine. To make what you're 
				unable to imagine is just gon' take a bit time.`
			},
			{
				skill: "SASS" ,
				style: `--active: hsl(330deg, 100%, 70%)`
			},
			{
				skill: "GitHub",
				style: `--active: hsl(153deg, 100%, 70%); --passive: #131313`
			}
		]
	},
	{
		category: "languages",
		style: `--active: hsl(120deg, 100%, 70%)`,
		skills: [ 
			{
				skill: "LDjango",
				style: `--active: hsl(120deg, 100%, 70%)`
			},
			{
				skill: "LFigma",
				style: "--active: hsl(266deg, 92%, 66%)"
			},
			{
				skill: "LPython" ,
				style: `--active: hsl(207deg, 100%, 70%)`
			},
			{
				skill: "LJavaScript",
				style: `--active: hsl(60deg, 100%, 70%); --passive: #222;`
			},
			{
				skill: "LSASS" ,
				style: `--active: hsl(330deg, 100%, 70%)`
			},
			{
				skill: "LGitHub",
				style: `--active: hsl(153deg, 100%, 70%); --passive: #131313`
			}
		]
	}
]

const allSkills = skills.map(category=>({...category.skills, category})).flat(1)

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
	render() {
		return html`
			<div opacome class="content">
				<div class="wrapper">
					<div class="skills" scrolly2 >
						${skills.map(
							category=>html`
								<br> <v-button 
									@click = ${e=>{
										if (category.skills.every(skill=>this.activeSkills.includes(skill)))
											return category.skills.forEach(categorySkill=>this.activeSkills = this.activeSkills.filter(_skill=>_skill!=categorySkill))
										for(let skill of category.skills)
											if (!this.activeSkills.includes(skill))
												this.activeSkills = [...this.activeSkills, skill]
									}}
									?active = ${category.skills.every(skill=>this.activeSkills.includes(skill))}
									text=${category.category} 
									class="category"
									style=${category.style}>
								</v-button> <br> 
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
						<v-button 
							text="Profile">
						</v-button> 

						<br>
						<v-button 
							text="F">
						</v-button>
					</div>
					<div class="projectsColumn" scrolly>
						<div class="projects">
							<div class="list selecteds">
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
								${projects.map(project=>project.raw ?? html`
									<div class="project">
										<div class="name"><b>${project.name}</b>	</div>
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
									</div>
								`)}
								<div class="project">
									<div class="name"><b>VanylUI</b>	</div>
									<div class="headline">Declerative, Performant JavaScript Component Library (Powered With Tagged Functions)</div>
									<div class="content">
										<div class="imgs">
											<div style="background-color: #999">salmon</div>
										</div>
										<div class="description">
											Aside from built in 2 way data binding lazy, Vanyl doesn't have any knowledge about your data so, when it's changed, you should call update.
										</div>
									</div>
								</div>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
							</div>
							<div class="list other">
								<div class="title">All projects</div>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
								<br>
								VanylUI
							</div>
						</div>
						p
					</div>
				</div>	
			</div>
		`
	}
}

VProjects.tag = "v-projects"
