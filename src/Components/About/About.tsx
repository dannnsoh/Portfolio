import { useInView } from "react-intersection-observer";
import Info from "./Info";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import infoImage from "./images/me.jpg";

const About = () => {
	const [ ref, inView ] = useInView({
		triggerOnce: true,
		threshold: 0.9
	});

	return (
		<Container className="about-container" fluid>
			<Row className="text-center mb-4">
				<h1 className="section-title">About</h1>
			</Row>
			<Row>
				<Col
					lg={5}
					className="about-thumbnail"
					ref={ref}
					style={
						inView ? (
							{
								animation: "zoomIn",
								animationDuration: "1s"
							}
						) : (
							{ visibility: "hidden" }
						)
					}
				>
					<div className="text-center">
						<Image src={infoImage} fluid />
					</div>
				</Col>
				<Col lg={7} className="about-info">
					<Info />
				</Col>
			</Row>
		</Container>
	);
};

export default About;
