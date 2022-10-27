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
import TestPage from './TestPage';


function NameContainer() {
	return (
		<div className="header-wrapper">
			<h1 className="name-header">ROBERT KELLY</h1>
		</div>

	);
}

function MainNav() {
	const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

	return (
		<Nav variant="pills" activeKey="1" onSelect={handleSelect}>
			<Nav.Item>
				<Nav.Link eventKey="1">
					About Me
				</Nav.Link>
				<Nav.Link eventKey="2">
					<Button>
					Skills & Technologies
					</Button>
				</Nav.Link>
				<Nav.Link eventKey="3">
					Education & History
				</Nav.Link>
				
				<NavDropdown title="Projects" id="nav-dropdown">
					<NavDropdown.Item eventKey="3.1">
						<Button>
							Scheduler
						</Button>
					</NavDropdown.Item>
				</NavDropdown>

				<Nav.Link eventKey="5">
					Contact
				</Nav.Link>
			</Nav.Item>
		</Nav>
	);
}

function NavDropdownExample() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
      <Nav.Item>
        <Nav.Link eventKey="1" href="#/home">
          NavLink 1 content
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" title="Item">
          NavLink 2 content
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" disabled>
          NavLink 3 content
        </Nav.Link>
      </Nav.Item>
      <NavDropdown title="Dropdown" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
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
						<Button onClick={() => setActive("test-page")}>Test Page</Button>
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
				{active == "test-page" &&
					<div className="section-wrapper">
						<TestPage />
					</div>
				}
			</div>
		</div>
		</body>
	);
}



