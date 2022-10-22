import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Contact.css";
import Badge from 'react-bootstrap/Badge';

function BadgeExample() {
	return (
		<div>
			<h1>
				Example heading <Badge bg="secondary">New</Badge>
			</h1>
		</div>
	);
}

function BasicExample() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}



export default function Contact() {
	return (
		<div className="contact-container">
			<h1>CONTACT ME</h1>
			{BasicExample()}
		</div>
	);
}
