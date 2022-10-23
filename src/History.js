import React, { useState } from "react";
import "./History.css";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from 'react-bootstrap/Badge';


export default function History() {
	return (
		<ListGroup as="ul" className="history-component">
			<h1>HISTORY</h1>
				<ListGroup.Item className="job-container">
					<h3>Web Development | Freelance | Remote</h3>
					<h4>Oct 2022 - Present</h4>
				</ListGroup.Item>
				<ListGroup.Item className="job-container">
					<h3>Carpentry | Boyd Handyman | Edmonton</h3>
					<h4>Oct 2019 - Nov 2021</h4>
				</ListGroup.Item>
				<ListGroup.Item className="job-container">
					<h3>Directional Drilling | Mongoose | Red Deer, AB</h3>
					<h4>March 2018 - August 2019</h4>
				</ListGroup.Item>
				<ListGroup.Item className="job-container">
					<h3>Landscaping | Classic Landscaping | Edmonton, AB</h3>
				</ListGroup.Item>
				<ListGroup.Item className="job-container">
					<h3>Front-of-House Security | Hudsons Canada's Pub | Edmonton, AB</h3>
				</ListGroup.Item>
				<ListGroup.Item className="job-container">
					<h3>Landscaping | Dynamic Landscapes | Edmonton, AB</h3>
				</ListGroup.Item>
				<ListGroup.Item className="job-container">
					<h3>Landscaping | DGC Contracting | Edmonton, AB</h3>
				</ListGroup.Item>
		</ListGroup>
	);
}

