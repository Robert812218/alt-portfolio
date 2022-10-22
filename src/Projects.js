import { useState } from "react";
import "./Projects.css";
import Accordion from "react-bootstrap/Accordion";


function Reverb() {
	return (
		<Accordion defaultActiveKey="0">
			<Accordion.Item eventKey="0">
				<Accordion.Header>Reverb</Accordion.Header>
				<Accordion.Body>
					<p>A music player that connects to the Spotify Developer API. Lets users connect their Spotify accounts and play from their library, as well as to add and remove songs, albums, and playlists from their Spotify accounts - and their Spotify library.</p>
					<a href="https://github.com/nathanpare/reverb-project">Reverb</a>
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
}

function Scheduler() {
	return (
		<Accordion defaultActiveKey="0">
			<Accordion.Item eventKey="0">
				<Accordion.Header>Scheduler</Accordion.Header>
			
				<p>A SPA (Single Page Application) for teachers to track their students interviews. The application uses various React hooks; from built-in to custom made. Users are enabled to add, edit and delete appointments in real time. Data is persisted using a PostgreSQL database.</p>
				<a href="https://github.com/Robert812218/scheduler">Scheduler</a>
			</Accordion.Item>	
		</Accordion>
	);
}


function LightBNB() {
        return (
                <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                                <Accordion.Header>LightBNB</Accordion.Header>
				<Accordion.Body>
					<p>An AirBNB clone built with SASS, Express.js, and PostgreSQL. Users can view, rent, add and review properties.</p>
					<a href="https://github.com/Robert812217/scheduler">LightBNB</a>
				</Accordion.Body>	
                        </Accordion.Item>
                </Accordion>
	);
}


function Tweeter() {
        return (
                <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                                <Accordion.Header>Tweeter</Accordion.Header>
				<Accordion.Body>	
					<p>A Twitter clone using HTML, CSS, JS, JQuery and AJAX. Back-end written in Node.js and Express.js.</p>
					<a href="https://github.com/Robert812218/tweeter">Tweeter</a>
				</Accordion.Body>
                        </Accordion.Item>
                </Accordion>
	);
}


function Tinyapp() {
        return (
                <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                                <Accordion.Header>Tinyapp</Accordion.Header>

				<p>A full-stack web application that allows users to shorten long URLs. Built with Node.js and Express.js.</p>
				<a href="https://github.com/Robert812218/tinyapp">Tinyapp</a>
                        </Accordion.Item>
                </Accordion>
	);
}



export default function Projects() {
	const [view, setView] = useState("");

	return (
		<div className="projects-container">
			<h1>PROJECTS</h1>
			<div className="project-wrapper">
				<Reverb />
			</div>
			<div className="project-wrapper">
				<Scheduler />
			</div>
			<div className="project-wrapper">
				<LightBNB />		
			</div>
			<div className="project-wrapper">
				<Tinyapp />
			</div>
			<div className="project-wrapper">
				<Tweeter />
			</div>
		</div>
	);

} 
