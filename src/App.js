import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import "./App.css";
import CustomNav from "./CustomNav";
import Contact from "./Contact";
import SkillsAndTechnologies from "./SkillsAndTechs";
import About from "./About";
import History from "./History";
import Projects from "./Projects";
import Academics from "./Academics";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function OutlineTypesExample() {
  return (
    <>
      <Button variant="outline-primary">Primary</Button>{' '}
      <Button variant="outline-secondary">Secondary</Button>{' '}
      <Button variant="outline-success">Success</Button>{' '}
      <Button variant="outline-warning">Warning</Button>{' '}
      <Button variant="outline-danger">Danger</Button>{' '}
      <Button variant="outline-info">Info</Button>{' '}
      <Button variant="outline-light">Light</Button>{' '}
      <Button variant="outline-dark">Dark</Button>{' '}
    </>
  );
}


export default function App() {	
	const [active, setActive] = useState("");
			
	
		

	return (
		<body>
		<div className="app-container">
			
	  		<div className="header-section">
				<div className="header-wrapper">
					<h1>ROBERT KELLY</h1>
				</div>
				<div className="nav-section">
					<div className="nav-buttons">
						<Button variant="outline-primary" onClick={() => setActive("about")}>About Me</Button>{' '}
						<Button variant="outline-secondary" onClick={() => setActive("skills-academics")}>Skills</Button>{' '}
						<Button variant="outline-warning" onClick={() => setActive("history")}>History</Button>{' '}
						<Button variant="outline-info" onClick={() => setActive("projects")}>Projects</Button>{' '}
						<Button variant="outline-success" onClick={() => setActive("contact")}>Contact</Button>{' '}
					</div>
					<div className="direction-buttons">
						<Button variant="outline-light">left</Button>{' '}
						<Button variant="outline-dark">right</Button>{' '}
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
		</body>
	);
}



