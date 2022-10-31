import React, { useState } from 'react';
import './TestUI.scss';

const Menu = props => {
	return (
		<div className={`menu-container ${props.showMenu}`}>
		<div className="overlay" />
		<div className="menu-items">
		<ul>
		<li>
		<a href="#welcome-section" onClick={props.toggleMenu}>HOME</a>
		</li>
		<li>
		<a href="#about" onClick={props.toggleMenu}>ABOUT</a>
		</li>
		<li>
		<a href="#projects" onClick={props.toggleMenu}>PROJECTS</a>
		</li>
		<li>
		<a href="#contact" onClick={props.toggleMenu}>CONTACT</a>
		</li>

		</ul>
		<SocialLinks />
		</div>
		</div>
	);
}

const About = props => {
	return (
		<section id="about">
		<div className="wrapper">
		<article>
		<div className="title">
		<h3>WHO AM I</h3>
		<p className="seperator" />
		</div>
		<div className="desc full">
		<h4>BOBDONALD</h4>
		<p>Full stack developer etc etc</p>
		<p>More bio details</p>
		</div>
		<div className="title">
		<h3>WHAT DO I DO</h3>
		<p className="seperator" />
		</div>
		<div className="desc">
		<h4>PROGRAMMER MANS</h4>
		<p>
		Front-end technologies
		</p>
		<p>
		Back-end technologies
		</p>
		</div>
		<div className="desc">
		<h4 className="subtitle">Other things</h4>
		<p>
		Other techs
		</p>
		<p>
		Other skills
		</p>

		</div>
		</article>
		</div>
		</section>
	);
}

const Project = props => {
	const tech = {
		sass: 'fab fa-sass',
		css: 'fab fa-css3-alt',
		js: 'fab fa-js-square',
		react: 'fab fa-react',
		vue: 'fab fa-vuejs',
		d3: 'far fa-chart-bar',
		node: 'fab fa-node',
	}

	const link = props.link || 'http://';
	const repo = props.repo || 'http://';

	return (
		<div className="project">
		<a className="project-link" href={link} target="_blank" rel="noopener noreferrer">
		<img className="project-image" src={props.img} alt={'Screenshot of ' + props.title} />
		</a>
		<div className="project-details">
		<div className="project-tile">
		<p className="icons">
		{props.tech.split(' ').map(t => (
			<i className={tech[t]} key={t} />
		))}
		</p>
		{props.title}{' '}
		</div>
		{props.children}
		<div className="buttons">
		<a href={repo} target="_blank" rel="noopener noreferrer">
		View source <i className="fas fa-external-link-alt" />
		</a>
		<a href={link} target="_blank">
		Try it Live <i className="fas fa-external-link-alt" />
		</a>
		</div>
		</div>
		</div>
	);
}

const Projects = props => {
	return (
		<section id="projects">
		<div className="projects-container">
		<div className="heading">
		<h3 className="title">MY PROJECTS:</h3>	
		<p className="seperator" />
		<p className="subtitle">
		<p>List of most recent projects:</p>
		</p>
		</div>
		<div className="projects-wrapper">
		<Project
		title=""
		img=""/* link to image in folder of project */
		tech="html css javascript/react.js"
		link=""
		repo="Robert812218/scheduler"
		>
		<small>
		Built with technologies xyz	
		</small>
		<p>
		Project description
		</p>
		</Project>
		</div>
		</div>
		</section>
	);
};

const Contact = props => {
	return (
		<section id="contact">
			<div className="container">
				<div className="heading-wrapper">
					<div className="heading">
						<p className="title">
							Contact:
						<span className="mail">
							<i className="fas fa-at at" />
								EMAIL
							<i className="fas fa-at at" />
								DOT COM
						</span>
							:
						</p>
					</div>
					<SocialLinks />
				</div>
				<form id="contact-form" action="#">
					<input placeholder="Name" name="name" type="text" requied />
					<input placeholder="Name" name="text" required />
					<textarea placeholder="Message" type="text" name="message" />
					<input className="button" id="submit" value="Submit" type="submit" />
				</form>
			</div>
		</section>
	);
}

const Footer = props => {
	return (
		<footer>
			<div className="wrapper">
				<h3>INSERT SOME KINDA FOOTER MESSAGE</h3>
				<p></p>
			</div>
		</footer>
	);
}


const SocialLinks = props => {
	return (
		<div className="social">
			<a 
				id="profile-link"
				href="https://github.com/Robert812218"
				target="_blank"
				rel="noopener noreferrer"
				title="Link to github"
			>
				{' '}

			<i className="fab fa-github" />
			</a>
		</div>
	);
}

export default function TestUI() {
	// make menuState false
	

	return (
		      <React.Fragment>
        <About />
        <Projects />
        <Contact />
        <Footer />
      </React.Fragment>
	);
}
