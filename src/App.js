import React, { useState } from "react";
import "./App.css";
import Header from "./Header/Header";
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
	const [about, setAbout] = useState(false);
	const [skills, setSkills] = useState(false);
	const [contact, setContact] = useState(false);
	const [navbar, setNavbar] = useState(false);
	
	function renderAbout() {

	}

	function renderSkills() {
	
	}
	
	function renderContact() {
	
	}

	

	return (
		<div className="app-container">
	  		<div className="header-section">
	  			<Header />
	  		</div>
	  		<div className="navbar-section">
				<button>navbar</button>
	  			<Navbar />
	  		</div>
			<div className="about-section">
				<button>about</button>
				<About />	
	  		</div>
			<div className="skills-section">
				<button>skills</button>
				<Skills />
			</div>
	  		<div className="contact-section">
				<button>contact</button>
	  			<Contact />
	  		</div>
		</div>
	)
}



