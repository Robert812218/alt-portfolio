import React, { useState } from "react";
import Education from "./Education";
import Skills from "./Skills";
import Technologies from "./Technologies";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Card';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

function CardExample() {
	return (
		<div className="d-flex justify-content-around">
			<Card style={{ width: '18rem' }}>
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Quick example text
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>

			<Card style={{ width: '18rem' }}>
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
					<Placeholder as={Card.Title} animation="glow">
						<Placeholder xs={6} />
					</Placeholder>
					<Placeholder as={Card.Text} animation="glow">
						<Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />
						<Placeholder xs={6} /> <Placeholder xs={8} />
					</Placeholder>
					<Placeholder.Button variant="primary" xs={6} />
				</Card.Body>
			</Card>
		</div>
	);
}

function BasicExample() {
	return (
		<div>
			<p aria-hidden="true">
				<Placeholder xs={6} />	
			</p>
			
			<Placeholder.Button xs={4} aria-hidden="true" />
		</div>
	);
}


function AnimationExample() {
  return (
    <>
      <Placeholder as="p" animation="glow">
        <Placeholder xs={12} />
      </Placeholder>
      <Placeholder as="p" animation="wave">
        <Placeholder xs={12} />
      </Placeholder>
    </>
  );
}

export default function SkillsAndTechnologies() {
	const [view, setView] = useState("");
	

	return (
		<div className="skills-and-techs-container">
				<div className="education-area">
					<h2>EDUCATION</h2>
					<button onClick={() => setView("education")}>Education</button>					 {AnimationExample()}
						{CardExample()}
						{BasicExample()}
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
