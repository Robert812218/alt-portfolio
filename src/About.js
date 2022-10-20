import React, { useState } from "react";
import "./About.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';


function ControlledCarousel() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	}
}


// export default function About() {
// 	return (
// 		<div>
// 			<h1>ABOUT</h1>
// 			{UncontrolledExample}
// 				<p>
// 					Analytical and solutions-driven professional with foundational knowledge in front-end and back-end web
// development technologies, utilizing a variety of programming languages to create interactive and user-friendly,
// and reliable websites. Exhibits well-versed knowledge in different stages of the software development life cycle,
// from project ideation and scoping, to design and development, to testing and deployment. Adept at working in fast
// -paced environments and collaborating with multidisciplinary teams to achieve project objectives.
// 				</p>
// 		</div>
// 	);
// }
