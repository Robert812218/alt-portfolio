import { useState } from "react";
import "./Projects.css";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function CardExample() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

function ProjectCards() {
	return (
		<CardGroup>
			<Card>
				<Card.Header>
					<a href="https://github.com/Robert812218">Github Home</a>
				</Card.Header>
				<Card.Body>
					<Card.Text>
						Github profile main page
					</Card.Text>
				</Card.Body>
				<Card.Img variant="bottom" src="holder.js/100px160" />
			</Card>

			<Card>
				<Card.Header>
					<a href="https://github.com/NathanPare/Reverb">Reverb</a>
				</Card.Header>
				<Card.Body>
					<Card.Text>
						A music player that connects to the Spotify Developer API. Lets users connect their Spotify accounts and play from their library, as well as to add and remove songs, albums, and playlists from their Spotify accounts - and their Spotify library.
					</Card.Text>
				</Card.Body>
				<Card.Img variant="bottom" src="holder.js/100px160" />
			</Card>

			<Card>
				<Card.Header>
					<a href="https://github.com/Robert812218/Scheduler">Scheduler</a>
				</Card.Header>
				<Card.Body>
					<Card.Text>
                                              A SPA (Single Page Application) for teachers to track their students interviews. The application uses various React hooks; from built-in to custom made. Users are enabled to add, edit and delete appointments in real time. Data is persisted using a PostgreSQL database.
					</Card.Text>
				</Card.Body>
				<Card.Img variant="bottom" src="holder.js/100px160" />
			</Card>

			<Card>
				<Card.Header>
					<a href="https://github.com/Robert812218/LightBNB">LightBNB</a>
				</Card.Header>
				<Card.Body>
					<Card.Text>
		An AirBNB clone built with SASS, Express.js, and PostgreSQL. Users can view, rent, add and review properties.
					</Card.Text>
				</Card.Body>
				<Card.Img variant="bottom" src="holder.js/100px160" />
			</Card>

			<Card>
				<Card.Header>
					<a href="https://github.com/Robert812218/Tweeter">Tweeter</a>
				</Card.Header>
				<Card.Body>
					<Card.Text>
					A Twitter clone using HTML, CSS, JS, JQuery and AJAX. Back-end written in Node.js and Express.js.
					</Card.Text>
				</Card.Body>
				<Card.Img variant="bottom" src="holder.js/100px160" />
			</Card>
			<Card>
				<Card.Header>
					<a href="https://github.com/Robert812218/Tinyapp">Tinyapp</a>
				</Card.Header>
				<Card.Body>
					<Card.Text>
			A full-stack web application that allows users to shorten long URLs. Built with Node.js and Express.js.
					</Card.Text>
				</Card.Body>
				<Card.Img variant="bottom" src="holder.js/100px160" />
			</Card>
		</CardGroup>
	);
}


export default function Projects() {
	const [view, setView] = useState("");
	


	return (
		<div className="projects-container">
			{ProjectCards()}
		</div>
	);
}


// export default function Projects() {
// 	const [view, setView] = useState("");
// 
// 	
// 
// 	return (
// 		<div className="projects-container">
// 			<h1>PROJECTS</h1>
// 			<div className="projects-details">
// 			<Accordion defaultActiveKey="0">
// 				<Accordion.Item eventKey="0">
// 					<Accordion.Header>
// 						<a href="https://github.com/Nathanpare/Reverb">Reverb</a>
// 					</Accordion.Header>
// 					<Accordion.Body>	
// 						<p>A music player that connects to the Spotify Developer API. Lets users connect their Spotify accounts and play from their library, as well as to add and remove songs, albums, and playlists from their Spotify accounts - and their Spotify library.</p>
// 
// 					</Accordion.Body>
// 				</Accordion.Item>
// 				<Accordion.Item eventKey="1">
// 					<Accordion.Header>
// 						<a href="https://github.com/Robert812218/Scheduler">Scheduler</a>
// 					</Accordion.Header>
// 					<Accordion.Body>		
// 						<p>A SPA (Single Page Application) for teachers to track their students interviews. The application uses various React hooks; from built-in to custom made. Users are enabled to add, edit and delete appointments in real time. Data is persisted using a PostgreSQL database.</p>
// 					</Accordion.Body>
// 				</Accordion.Item>
// 				<Accordion.Item eventKey="2">
// 					<Accordion.Header>
// 						<a href="https://github.com/Robert812218/lightbnb">LightBNB</a>
// 					</Accordion.Header>
// 					<Accordion.Body>
// 						<p>An AirBNB clone built with SASS, Express.js, and PostgreSQL. Users can view, rent, add and review properties.</p>
// 						<a href="https://github.com/Robert812217/scheduler">LightBNB</a>
// 					</Accordion.Body>	
// 				</Accordion.Item>
// 
//                         	<Accordion.Item eventKey="2">
//                                 	<Accordion.Header>
// 						<a href="https://github.com/Robert812218/tweeter">Tweeter</a>
// 					</Accordion.Header>
// 				<Accordion.Body>	
// 						<p>A Twitter clone using HTML, CSS, JS, JQuery and AJAX. Back-end written in Node.js and Express.js.</p>
// 				</Accordion.Body>
//                         	</Accordion.Item>
//                         		<Accordion.Item eventKey="0">
//                                 	<Accordion.Header>
// 						<a href="https://github.com/Robert812218/tinyapp">Tinyapp</a>
// 					</Accordion.Header>
// 					<p>A full-stack web application that allows users to shorten long URLs. Built with Node.js and Express.js.</p>
//                         	</Accordion.Item>
// 			</Accordion>
// 			</div>
// 			<div className="projects-render-area">
// 				
// 			</div>
// 		</div>
// 	);
// 
// } 
