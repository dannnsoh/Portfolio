import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import projects from "./projectData";
import ProjectCard from "./ProjectCard";
import { useInView } from "react-intersection-observer";

const Projects = () => {
	const [ref, inView] = useInView({
		threshold: 0.1,
		triggerOnce: true
	});

	return (
		<Container fluid>
			<Row className="text-center mb-3">
				<h1 className="section-title">Projects</h1>
			</Row>
			<Row>
				<div
					className="projects-container"
					ref={ref}
					style={
						inView
							? { animation: "fadeIn", animationDuration: "1.5s" }
							: { visibility: "hidden" }
					}
				>
					{projects.map(project => {
						return (
							<ProjectCard
								key={project.id}
								title={project.title}
								description={project.description}
								image={project.image}
								link={project.link}
							/>
						);
					})}
				</div>
			</Row>
		</Container>
	);
};
export default Projects;
