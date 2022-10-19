import { useState } from "react";

export default function Projects() {
	return (
		<div className="projects-component">
			<h1>Github.com/Robert812218</h1>
			<h1>PROJECTS</h1>
				<h2>Reverb (contributor):</h2>
					<p>A music player that connects to the Spotify Developer API. Lets users connect their Spotify accounts and play from their library, as well as to add and remove songs, albums, and playlists from their Spotify accounts, and Spotify's library.</p>
					<a href="https://github.com/nathanpare/reverb-project">Reverb</a>
				<h2>Scheduler</h2>	
					<p>A SPA (Single Page Application) for teachers to track their students interviews. The application uses various React hooks; from built-in to custom made. Users are enabled to add, edit and delete appointments in real time. Data is persisted using a PostgreSQL database.</p>
					<a href="https://github.com/Robert812218/scheduler">Scheduler</a>
				<h2>LightBNB</h2>
					<p>An AirBNB clone built with SASS, Express.js, and PostgreSQL. Users can view, rent, add and review properties.</p>
					<a href="https://github.com/Robert812218/scheduler">LightBNB</a>
				<h2>Tweeter</h2>
					<p>A Twitter clone using HTML, CSS, JS, JQuery and AJAX. Back-end written in Node.js and Express.js.</p>
					<a href="https://github.com/Robert812218/tweeter">Tweeter</a>
				<h2>Tinyapp</h2>
					<p>A full-stack web application that allows users to shorten long URLs. Built with Node.js and Express.js.</p>
					<a href="https://github.com/Robert812218/tinyapp">Tinyapp</a>
		</div>
	);
} 
