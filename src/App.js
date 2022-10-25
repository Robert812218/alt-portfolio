import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import "./App.css";
import CustomNav from "./CustomNav";
import Contact from "./Contact";
import SkillsAndTechnologies from "./SkillsAndTechs";
import About from "./About";
import HistoryAndEducation from "./HistoryAndEducation";
import Projects from "./Projects";
import Academics from "./Academics";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


function NameContainer() {
	return (
		<div className="header-wrapper">
			<h1 className="name-header">ROBERT KELLY</h1>
		</div>

	);
}


function Naveroni({props}) {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="#home">
					ROBERT KELLY
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link>ABOUT ME</Nav.Link>
						<Nav.Link>SKILLS</Nav.Link>
						<Nav.Link>HISTORY</Nav.Link>
						<Nav.Link>PROJECTS</Nav.Link>
						<Nav.Link>CONTACT</Nav.Link>
						<Nav.Link><a href="https://github.com/Robert812218">GITHUB</a></Nav.Link>
						<Nav.Link>LINKEDIN</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default function App() {	
	const [active, setActive] = useState("");
			
	
	
		

	return (
		<body>
		<div className="app-container">
	  		<div className="header-section">
				<NameContainer />
				<Navbar className="nav-section">
					<ButtonGroup className="nav-buttons">
						<Button variant="outline-primary" onClick={() => setActive("about")}>About Me</Button>{' '}
						<Button variant="outline-secondary" onClick={() => setActive("skills-academics")}>Skills & Technologies</Button>{' '}
						<Button variant="outline-warning" onClick={() => setActive("history")}>Education & History</Button>{' '}
						<Button variant="outline-info" onClick={() => setActive("projects")}>Projects</Button>{' '}
						<Button variant="outline-success" onClick={() => setActive("contact")}>Contact</Button>{' '}
					</ButtonGroup>
				</Navbar>
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
						<HistoryAndEducation />
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



