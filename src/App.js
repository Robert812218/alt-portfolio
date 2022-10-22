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

function DropdownExample() {
	  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function ContainerExample() {
	return (
		<div>
			<h4>React-bootstrap container component</h4>
			<Container>
				<h3>Sample Container</h3>
			</Container>
		</div>
	);
}

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
	)
}



