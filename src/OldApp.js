import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import "./App.css";
import CustomNav from "./CustomNav";
import Contact from "./Contact";
import SkillsAndTechnologies from "./SkillsAndTechs";
import About from "./About";
import Projects from "./Projects";
import Academics from "./Academics";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import TestPage from './TestPage';


function NameContainer() {
	return (
		<div className="header-wrapper">
			<h1 className="name-header">ROBERT KELLY</h1>
		</div>

	);
}



export default function App() {	
	const [active, setActive] = useState("");
		

	return (
		<body>
		<div className="app-container">
	  		<div className="header-section">
				<NameContainer />
			
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
				{active == "test-page" &&
					<div className="section-wrapper">
						<TestPage />
					</div>
				}
			</div>
		</body>
	);
}



