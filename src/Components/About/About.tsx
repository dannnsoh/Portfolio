import Info from "./Info";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Profile from "./Profile";

const About = () => {
	return (
		<Container className="about-container" fluid>
			<Row className="text-center mb-4">
				<h1 className="section-title">About</h1>
			</Row>
			<Row>
				<Col lg={5} className="text-center about-left">
					<Profile />
				</Col>
				<Col lg={7} className="about-info">
					<Info />
				</Col>
			</Row>
		</Container>
	);
};

export default About;
