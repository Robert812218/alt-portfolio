import React, { useState } from "react";
import "./HistoryAndEducation.css";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';


function Education() {
        return (

        	<div className="education-component">
                                <h1>EDUCATION</h1>
                                        <h3>Full Stack Web Development (Diploma) - Lighthouse Labs</h3>
                                        <ul>
                                                <li className="skill-container">The Command Line</li>
                                                <li className="skill-container">Version Control</li>
                                                <li className="skill-container">Javascript Fundamentals</li>
                                                <li className="skill-container">Debugging</li>
                                                <li className="skill-container">Asynchronous Code</li>
                                                <li className="skill-container">NPM & Package Management</li>
                                                <li className="skill-container">Test-Driven Development</li>
                                                <li className="skill-container">Git & Git Workflow</li>
                                                <li className="skill-container">Responsive Design</li>
                                                <li className="skill-container">Client-side JS</li>
                                        </ul>

                                        <h3>Notable Learning Outcomes: </h3>
 i						<ul>
                                                        <li><b>Web Development: </b>Acquired in-depth knowledge necessary to build dynamic web applications using various programming languages, frameworks, and tools. Demonstrates ability to build and deploy functional, database-driven web applications that are both visually appealing and optimized for search engine visibility.</li>
                                                        <li><b>Testing & Debugging: </b>Managed aspects of testing and debugging in an agile development environment of the functionality of a website and web-based application, including user interface confirmation, error identification, and resolution of programming issues.</li>
                                                                <li><b>Database Management: </b>Cultivated foundation in database management, learned to design databases, write SQL queries, and develop strategies to optimize performance. Gained valuable experience with Ruby on Rails and Node.js frameworks while executing a number of full-stack web development, data science, and design projects for Lighthouse Labs students and faculty.</li>
                                                        <li><b>Client-side Programming: </b>Solidified expertise in create interactive web applications using the latest client-side programming technologies, including HTML5, CSS3, and JavaScript. Devised new methodologies to streamline software development lifecycle while also reducing costs and time of deployment to production servers.</li>
                                                </ul>
                                </div>


        );
}
function History() {
	return (
		<ListGroup as="ul" className="history-component">
			<h1>HISTORY</h1>
				<div className="job-container">
					<h3>Web Development | Freelance | Remote</h3>
					<h4>Oct 2022 - Present</h4>
				</div>
				<div className="job-container">
					<h3>Carpentry | Boyd Handyman | Edmonton</h3>
					<h4>Oct 2019 - Nov 2021</h4>
				</div>
				<div className="job-container">
					<h3>Directional Drilling | Mongoose | Red Deer, AB</h3>
					<h4>March 2018 - August 2019</h4>
				</div>
				<div className="job-container">
					<h3>Landscaping | Classic Landscaping | Edmonton, AB</h3>
				</div>
				<div className="job-container">
					<h3>Front-of-House Security | Hudsons Canada's Pub | Edmonton, AB</h3>
				</div>
				<div className="job-container">
					<h3>Landscaping | Dynamic Landscapes | Edmonton, AB</h3>
				</div>
				<div className="job-container">
					<h3>Landscaping | DGC Contracting | Edmonton, AB</h3>
				</div>
		</ListGroup>
		
	);
}
export default function HistoryAndEducation() {
	
	return (
		<div className="education-history-container">
			<Education />
			<History />
		</div>
	);
}

