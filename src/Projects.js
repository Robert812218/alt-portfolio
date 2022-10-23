import { useState } from "react";
import "./Projects.css";
import Accordion from "react-bootstrap/Accordion";



export default function Projects() {
	const [view, setView] = useState("");

	return (
		<div className="projects-container">
			<h1>PROJECTS</h1>
			<Accordion defaultActiveKey="0">
				<Accordion.Item eventKey="0">
					<Accordion.Header>
						<a href="https://github.com/Nathanpare/Reverb">Reverb</a>
					</Accordion.Header>
					<Accordion.Body>	
						<p>A music player that connects to the Spotify Developer API. Lets users connect their Spotify accounts and play from their library, as well as to add and remove songs, albums, and playlists from their Spotify accounts - and their Spotify library.</p>

					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="1">
					<Accordion.Header>
						<a href="https://github.com/Robert812218/Scheduler">Scheduler</a>
					</Accordion.Header>
					<Accordion.Body>		
						<p>A SPA (Single Page Application) for teachers to track their students interviews. The application uses various React hooks; from built-in to custom made. Users are enabled to add, edit and delete appointments in real time. Data is persisted using a PostgreSQL database.</p>
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="2">
					<Accordion.Header>
						<a href="https://github.com/Robert812218/lightbnb">LightBNB</a>
					</Accordion.Header>
					<Accordion.Body>
						<p>An AirBNB clone built with SASS, Express.js, and PostgreSQL. Users can view, rent, add and review properties.</p>
						<a href="https://github.com/Robert812217/scheduler">LightBNB</a>
					</Accordion.Body>	
				</Accordion.Item>

                        	<Accordion.Item eventKey="2">
                                	<Accordion.Header>
						<a href="https://github.com/Robert812218/tweeter">Tweeter</a>
					</Accordion.Header>
				<Accordion.Body>	
						<p>A Twitter clone using HTML, CSS, JS, JQuery and AJAX. Back-end written in Node.js and Express.js.</p>
				</Accordion.Body>
                        	</Accordion.Item>
                        		<Accordion.Item eventKey="0">
                                	<Accordion.Header>
						<a href="https://github.com/Robert812218/tinyapp">Tinyapp</a>
					</Accordion.Header>
					<p>A full-stack web application that allows users to shorten long URLs. Built with Node.js and Express.js.</p>
                        	</Accordion.Item>
			</Accordion>
		</div>
	);

} 
