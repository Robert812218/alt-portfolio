import React, { useState } from "react";
import Education from "./Education";
import Skills from "./Skills";
import Technologies from "./Technologies";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';



export default function SkillsAndTechnologies() {
 	const [view, setView] = useState("");
 	  
 	
 
   	return (
   		<div className="skills-and-techs-container">
   				<button onClick={() => setView("education")}>Education</button>					 
   				<button onClick={() => setView("skills")}>Skills</button>
 			
   				<button onClick={() => setView("technologies")}>Expand</button>
   				{view === "education" && 
  					<div>
   						<Education />
  					</div>
   				}
   				{view === "skills" &&
   					<div>
   						<Skills />
   					</div>
   				}
   				{view === "technologies" && 
   					<div>
   						<Technologies />
   					</div>
   				}
   		</div>
   	);
 }
