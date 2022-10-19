import { useState } from "react";
import "./Projects.css";

function Reverb() {
	return (
		<div>
			<h2>Reverb (contributor):</h2>
				<p>A music player that connects to the Spotify Developer API. Lets users connect their Spotify accounts and play from their library, as well as to add and remove songs, albums, and playlists from their Spotify accounts, and Spotify's library.</p>
				<a href="https://github.com/nathanpare/reverb-project">Reverb</a>
		</div>
	);
}

function Scheduler() {
	return (
		<div>
			
			<h2>Scheduler</h2>	
				<p>A SPA (Single Page Application) for teachers to track their students interviews. The application uses various React hooks; from built-in to custom made. Users are enabled to add, edit and delete appointments in real time. Data is persisted using a PostgreSQL database.</p>
				<a href="https://github.com/Robert812218/scheduler">Scheduler</a>
		</div>
	);
}

function LightBNB() {
	return (
		<div>
			<h2>LightBNB</h2>
				<p>An AirBNB clone built with SASS, Express.js, and PostgreSQL. Users can view, rent, add and review properties.</p>
				<a href="https://github.com/Robert812218/scheduler">LightBNB</a>
		</div>
	);
}

function Tweeter() {
	return (
		<div>
			<h2>Tweeter</h2>
				<p>A Twitter clone using HTML, CSS, JS, JQuery and AJAX. Back-end written in Node.js and Express.js.</p>
				<a href="https://github.com/Robert812218/tweeter">Tweeter</a>
		</div>
	);
}

function Tinyapp() {
	return (
		<div>
			<h2>Tinyapp</h2>
				<p>A full-stack web application that allows users to shorten long URLs. Built with Node.js and Express.js.</p>
				<a href="https://github.com/Robert812218/tinyapp">Tinyapp</a>
		</div>
	);
}

export default function Projects() {
	const [view, setView] = useState("");
	

	return (
		<div className="projects-container">
			<h1>Github.com/Robert812218</h1>
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
					<Tweeter />
				</div>
				<div className="project-wrapper">
					<Tinyapp />	
				</div>
		</div>
	);
} 
