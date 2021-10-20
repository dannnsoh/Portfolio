import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";

const Projects = () => {
	return (
		<Container className="projects-container" fluid>
			<Row className="text-center">
				<h1 className="section-title">Projects</h1>
			</Row>
			<Row className="projects-area">
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</Row>
		</Container>
	);
};
export default Projects;
