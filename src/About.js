import React, { useState } from "react";
import "./About.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

function DescriptionContainer() {
	return (
		<div>

 			<p>
 					Analytical and solutions-driven professional with foundational knowledge in front-end and back-end web
 development technologies, utilizing a variety of programming languages to create interactive and user-friendly,
 and reliable websites. Exhibits well-versed knowledge in different stages of the software development life cycle,
 from project ideation and scoping, to design and development, to testing and deployment. Adept at working in fast
 -paced environments and collaborating with multidisciplinary teams to achieve project objectives.
 			</p>
		</div>
	);
}

function GitContainer() {
	return (
		<div>
			<h1><a href="https://github.com/Robert812218">GITHUB</a></h1>
		</div>
	);
}

function CodepenContainer() {
	return (
		<div>
			<h1><a href="https://codepen.io/robert812218">Codepen</a></h1>
		</div>
	);
}

export default function About() {

	return (
 		<div className="about-container">
			<div className="profile-container">
 			<h1>ABOUT</h1>
				<DescriptionContainer />
				<GitContainer />	
				
			</div>
			
			<div className="headshot-container">
			</div>
 		</div>
 	);
}
