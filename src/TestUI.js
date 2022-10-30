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
					
				</div>
			</div>
		</section>
	);
}

const SocialLinks = props => {
	return (
		<div>
			SOCIAL LINKS
		</div>
	);
}

export default function TestUI() {
	return (
		<div>
			<Menu />
		</div>
	);
}
