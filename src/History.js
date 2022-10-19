import React, { useState } from "react";
import "./History.css";


export default function History() {
	return (
		<div className="history-component">
			<h1>HISTORY</h1>
				<div className="job-container">
					<h2>Web Development | Freelance | Remote</h2>
					<h3>Oct 2022 - Present</h3>
				</div>
				<div className="job-container">
					<h2>Carpentry | Boyd Handyman | Edmonton</h2>
					<h3>Oct 2019 - Nov 2021</h3>
				</div>
				<div className="job-container">
					<h2>Directional Drilling | Mongoose | Red Deer, AB</h2>
					<h3>March 2018 - August 2019</h3>
				</div>
				<div className="job-container">
					<h2>Landscaping | Classic Landscaping | Edmonton, AB</h2>
				</div>
				<div className="job-container">
					<h2>Front-of-House Security | Hudsons Canada's Pub | Edmonton, AB</h2>
				</div>
				<div className="job-container">
					<h2>Landscaping | Dynamic Landscapes | Edmonton, AB</h2>
				</div>
				<div className="job-container">
					<h2>Landscaping | DGC Contracting | Edmonton, AB</h2>
				</div>
		</div>
	);
}
