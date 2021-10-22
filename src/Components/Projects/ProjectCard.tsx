import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import sample from "./images/planets.jpg";
import Subtitle from "./Subtitle";

interface ProjectProps {
	title: string;
	description: string;
	apps: string[];
}

const ProjectCard = (props: ProjectProps) => {
	return (
		<Col>
			<Card className="projects-card">
				<Card.Img src={sample} />
				<Card.Body>
					<Card.Title>{props.title}</Card.Title>
					<Card.Text>{props.description}</Card.Text>
					<Subtitle />
					<Subtitle />
					<Subtitle />
				</Card.Body>
			</Card>
		</Col>
	);
};

export default ProjectCard;
