import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Contact = () => {
	return (
		<Container className="contact-container" fluid>
			<Row className="text-center">
				<h1 className="section-title">Contact</h1>
			</Row>
			<Row>
				<form className="input-area">
					<input type="text" placeholder="Name" />
					<input type="email" placeholder="Email" />
					<textarea rows={8} placeholder="Message" />
					<button className="submit-contact">Submit</button>
				</form>
			</Row>
		</Container>
	);
};

export default Contact;
