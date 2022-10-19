import "./Contact.css";

export default function Contact() {
	return (
		<div className="contact-container">
			<h1>CONTACT ME</h1>
				<form className="contact-form">
					<label for="email">Email: </label>
					<input type="text"></input>
					<label for="name">Phone number: </label>
					<input type=""></input>
				</form>
		</div>
	);
}
