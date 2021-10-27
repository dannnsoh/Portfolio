import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectCarousel from "./ProjectCarousel";
import Icons from "./Icons";
import { useInView } from "react-intersection-observer";

const Projects = () => {
	const [ ref, inView ] = useInView({
		threshold: 0.9,
		triggerOnce: true
	});

	return (
		<Container className="projects-container" fluid>
			<Row className="text-center mb-3">
				<h1 className="section-title">Projects</h1>
			</Row>
			<Row className="projects-area">
				<Col
					ref={ref}
					style={inView ? { animation: "fadeIn", animationDuration: "1.5s" } : { visibility: "hidden" }}
				>
					<ProjectCarousel />
				</Col>
				<Col className="icons-area">
					<Icons />
				</Col>
			</Row>
		</Container>
	);
};
export default Projects;
