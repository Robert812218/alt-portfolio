import React, { useState } from "react";
import "./Header.css";

export default function Header({setAbout}) {
	function setAbout() {
		props.setAbout(;
	}		

	return (
		<div className="header-wrapper">
			<h1>ROBERT KELLY</h1>
			<div className="nav-section">
				<button onClick={setAbout}>About Me</button>
				<button onClick={() => alert("skills")}>Skills</button>
				<button onClick={() => alert("contact")}>Contact Me</button>
			</div>
		</div>
	);
}
