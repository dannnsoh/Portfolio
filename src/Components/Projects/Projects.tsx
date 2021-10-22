import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";

const Projects = () => {
	const apps = [ "HTMl", "CSS", "Javascript" ];

	return (
		<Container className="projects-container" fluid>
			<Row className="text-center">
				<h1 className="section-title">Projects</h1>
			</Row>
			<Row className="projects-area">
				<ProjectCard
					title="Keeper"
					description="Some quick example text to build on the card title and make up the bulk of the card's content."
					apps={apps}
				/>
				<ProjectCard
					title="Keeper"
					description="Some quick example text to build on the card title and make up the bulk of the card's content."
					apps={apps}
				/>
				<ProjectCard
					title="Keeper"
					description="Some quick example text to build on the card title and make up the bulk of the card's content."
					apps={apps}
				/>
			</Row>
		</Container>
	);
};
export default Projects;
