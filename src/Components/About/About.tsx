import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import infoImage from "./images/me.jpg";
import Icons from "./Icons";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";

const About = () => {
	const [ ref, inView ] = useInView({
		triggerOnce: true,
		threshold: 0.5
	});
	const iconsEl = useRef(null);

	return (
		<Container className="about-container" fluid>
			<Row className="text-center mb-5">
				<h1 className="section-title">About</h1>
			</Row>
			<Row>
				<Col
					className="about-info"
					style={inView ? { animation: "fadeInLeft", animationDuration: "1.5s" } : { visibility: "hidden" }}
				>
					<div className="text-center">
						<Image src={infoImage} roundedCircle fluid />
					</div>
					<div className="about-text-container">
						<span ref={ref} className="about-text">
							I am a self-taught web developer with a strong passion for Javascript, React, and all things
							web development. The unique combination of creativity, logic, technology and never running
							out of new things to discover, drives my excitement and passion for web development. Despite
							my inexperience in the web development industry, I look forward to continuing my journey in
							this field, meeting new people and gathering more knowledge on the way, and eventually
							starting a career as a full stack web developer.
						</span>
					</div>
				</Col>
				<Col ref={iconsEl} className="about-skills text-center">
					<Icons />
				</Col>
			</Row>
		</Container>
	);
};

export default About;
