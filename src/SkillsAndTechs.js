import React, { useState } from "react";
import Education from "./Education";
import Skills from "./Skills";
import Technologies from "./Technologies";


export default function SkillsAndTechnologies() {
	const [view, setView] = useState("");
	

	return (
		<div className="skills-and-techs-container">
				
				<div className="education-area">
					<h2>EDUCATION</h2>
					<button onClick={() => setView("education")}>Education</button>
						{view === "education" && 
							<div>
								<Education />
							</div>
						}
				</div>
				<div className="skills-area">
				<h2>SKILLS</h2>
				<button onClick={() => setView("skills")}>Skills</button>
					{view === "skills" &&
						<div>
							<Skills />
						</div>
					}
				</div>
				<div className="technologies-area">
				<h2>TECHNOLOGIES</h2>
				<button onClick={() => setView("technologies")}>Expand</button>
					{view === "technologies" && 
						<div>
							<Technologies />
						</div>
					}
				</div>
		</div>
	);
}
