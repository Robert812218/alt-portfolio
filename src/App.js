import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Contact from "./Contact/Contact";
import Skills from "./Skills/Skills";
import About from "./About/About";
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
					<button onClick={() => setActive("skills")}>Skills</button>
					<button onClick={() => setActive("contact")}>Contact</button>
				</div>
	  		</div>
			<div className="render-area">
				{active === "about" && <About />}
				{active === "skills" && <Skills />}
				{active === "contact" && <Contact />}
			</div>
		</div>
	)
}



