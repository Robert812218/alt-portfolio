import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Contact from "./Contact";
import SkillsAndTechnologies from "./SkillsAndTechs";
import About from "./About";
import History from "./History";
import Projects from "./Projects";
import Academics from "./Academics";
// Home
// About Me
// Skills
// Github
// Contact Me

export default function App() {	
	const [active, setActive] = useState("");
	
	

	return (
		<div className="app-container">
	  		<div className="header-section">
				<div className="header-wrapper">
					<h1>ROBERT KELLY</h1>
				</div>
				<div className="nav-section">
					<div className="nav-buttons">
						<button onClick={() => setActive("about")}>About Me</button>
						<button onClick={() => setActive("skills-academics")}>Skills</button>
						<button onClick={() => setActive("history")}>History</button>
						<button onClick={() => setActive("projects")}>Projects</button>

						<button onClick={() => setActive("contact")}>Contact</button>
					</div>
					<div className="direction-buttons">
						<button>left</button>
						<button>right</button>
					</div>
				</div>
	  		</div>
			<div className="render-area">
				{active === "about" && 
					<div className="section-wrapper">
						<About />
					</div>
				}
				{active === "skills-academics" && 
					<div className="section-wrapper">
						<SkillsAndTechnologies />
					</div>
				}
				{active === "history" && 
					<div className="section-wrapper">
						<History />
					</div>
				}
				{active === "projects" && 
					<div className="section-wrapper">
						<Projects />
					</div>
				}
				{active === "contact" && 
					<div className="section-wrapper">
						<Contact />
					</div>
				}
			</div>
		</div>
	)
}



