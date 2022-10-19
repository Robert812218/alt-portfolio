import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Skills from "./Skills";
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
					<button onClick={() => setActive("about")}>About Me</button>
					<button onClick={() => setActive("skills-academics")}>Skills</button>
					<button onClick={() => setActive("history")}>History</button>
					<button onClick={() => setActive("projects")}>Projects</button>

					<button onClick={() => setActive("contact")}>Contact</button>
				</div>
	  		</div>
			<div>
				<p></p>
			</div>
			<div className="render-area">
				{active === "about" && 
					<div className="about-area">
						<About />
					</div>
				}
				{active === "skills-academics" && 
					<div className="skills-area">
						<Skills />
					</div>
				}
				{active === "history" && 
					<div className="history-area">
						<History />
					</div>
				}
				{active === "projects" && 
					<div className="projects-area">
						<Projects />
					</div>
				}
				{active === "contact" && 
					<div className="contacts-area">
						<Contact />
					</div>
				}
			</div>
		</div>
	)
}



