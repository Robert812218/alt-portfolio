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
				</article>
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
