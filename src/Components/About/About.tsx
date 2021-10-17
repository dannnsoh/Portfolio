import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import infoImage from "./images/me.jpg";
import Icons from "./Icons";

const About = () => {
	return (
		<Container className="about-container" fluid>
			<Row className="text-center mb-5">
				<h1 className="section-title">About</h1>
			</Row>
			<Row>
				<Col className="about-info">
					<Card className="about-card">
						<div className="text-center">
							<Image src={infoImage} roundedCircle fluid />
						</div>
						<Card.Body className="about-text">
							Motivated and passionate developer looking to gather more experience in the industry and put
							my skills to use in a professional environment. I am a self-taught web developer with a
							strong passion for Javascript, React, and all things web development. Through my personal
							projects, I came to be familiar with the development process for various web-based
							technologies. Despite my inexperience in the web development industry, I look forward to
							continuing my journey in this field, meeting new people and gathering more knowledge on the
							way, and eventually starting a career as a full stack web developer.
						</Card.Body>
					</Card>
				</Col>
				<Col className="about-skills text-center">
					<Icons />
				</Col>
			</Row>
		</Container>
	);
};

export default About;
