import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './SkillsAndTechs.css';

function Technologies() {
	return (
		<div className="technologies-container">
			<ul> 
				<li>Javascript Fundamentals</li>		
				<li>HTML/CSS</li>
				<li>Node.js</li>
				<li>Express.js</li>
				<li>React.js</li>
				<li>Rust</li>	
				<li></li>
				<li>Elixir</li>
				<li>Linux Operating Systems</li>
				<li>Bash shell scripting</li>
			</ul>
		</div>
	);
}


function Skills() {
        return (
                <div className="skills-component">

                        <h1>SKILLS</h1>
                        <ul className="skill-items">
                                <li className="skill-item">UX & UI Design</li>
                                <li className="skill-item">Website Management</li>
                                <li className="skill-item">Integration Testing</li>
                                <li className="skill-item">Data Analytics</li>
                                <li className="skill-item">Programming Languages</li>
                                <li className="skill-item">Front-End Development</li>
                                <li className="skill-item">Technical Project Management</li>
                                <li className="skill-item">Solution Development</li>
                                <li className="skill-item">Team Communication</li>
                        </ul>
                </div>

        );
}

export default function SkillsAndTechnologies() {
 	const [view, setView] = useState("");
 	  
			
 
   	return (
   		<div className="skills-and-techs-container">
				<div className="skills-techs-buttons">
   					<button onClick={() => setView("skills")}>Skills</button>
   					<button onClick={() => setView("technologies")}>Technologies</button>
				</div>
				<div className="skills-and-techs-container">
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
   		</div>
   	);
 }
