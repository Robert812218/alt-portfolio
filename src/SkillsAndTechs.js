import React, { useState } from "react";
import Education from "./Education";
import Skills from "./Skills";
import Technologies from "./Technologies";
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';


function BasicExample() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}


export default function SkillsAndTechnologies() {
	const [view, setView] = useState("");
  	
 	 	
  
  	return (
  		<div className="skills-and-techs-container">
  				<div className="education-area">
  					<h2>EDUCATION</h2>
  					<button onClick={() => setView("education")}>Education</button>					 
  						{view === "education" && 
 							<div>
  								<Education />
 							</div>
  						}
  				</div>
  				<div className="skills-area">
  				<h2>SKILLS</h2>
  				<button onClick={() => setView("skills")}>Skills</button>
  					{view === "skills" &&
  						<div>
  							<Skills />
  						</div>
  					}
  				</div>
  				<div className="technologies-area">
  				<h2>TECHNOLOGIES</h2>
  				<button onClick={() => setView("technologies")}>Expand</button>
  					{view === "technologies" && 
  						<div>
  							<Technologies />
  						</div>
  					}
  				</div>
  		</div>
  	);
}
