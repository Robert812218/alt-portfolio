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
		<div className="technology-component">
			
		</div>
	);
}

function Education() {
        return (

          <div className="education-component">
                                <h1>EDUCATION</h1>
                                        <h3>Full Stack Web Development (Diploma) - Lighthouse Labs</h3>
                                        <ul>
                                                <li>The Command Line</li>
                                                <li>Version Control</li>
                                                <li>Javascript Fundamentals</li>
                                                <li>Debugging</li>
                                                <li>Asynchronous Code</li>
                                                <li>NPM & Package Management</li>
                                                <li>Test-Driven Development</li>
                                                <li>Git & Git Workflow</li>
                                                <li>Responsive Design</li>
                                                <li>Client-side JS</li>
                                        </ul>
                                        <h3>Notable Learning Outcomes: </h3>
 <ul>
                                                        <li><b>Web Development: </b>Acquired in-depth knowledge necessary to build dynamic web applications using various programming languages, frameworks, and tools. Demonstrates ability to build and deploy functional, database-driven web applications that are both visually appealing and optimized for search engine visibility.</li>
                                                        <li><b>Testing & Debugging: </b>Managed aspects of testing and debugging in an agile development environment of the functionality of a website and web-based application, including user interface confirmation, error identification, and resolution of programming issues.</li>
                                                                <li><b>Database Management: </b>Cultivated foundation in database management, learned to design databases, write SQL queries, and develop strategies to optimize performance. Gained valuable experience with Ruby on Rails and Node.js frameworks while executing a number of full-stack web development, data science, and design projects for Lighthouse Labs students and faculty.</li>
                                                        <li><b>Client-side Programming: </b>Solidified expertise in create interactive web applications using the latest client-side programming technologies, including HTML5, CSS3, and JavaScript. Devised new methodologies to streamline software development lifecycle while also reducing costs and time of deployment to production servers.</li>
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
